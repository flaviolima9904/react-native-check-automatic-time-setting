package com.checkautomatictimesetting

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactMethod
import android.provider.Settings

class CheckAutomaticTimeSettingModule(private val reactContext: ReactApplicationContext) :
  NativeCheckAutomaticTimeSettingSpec(reactContext) {

  companion object {
    const val NAME = NativeCheckAutomaticTimeSettingSpec.NAME
  }

  @ReactMethod
  override fun isAutomaticTimeEnabled(promise: Promise) {
    try {
      val autoTime = Settings.Global.getInt(
        reactContext.contentResolver,
        Settings.Global.AUTO_TIME
      )
      
      promise.resolve(autoTime == 1)
    } catch (e: Settings.SettingNotFoundException) {
      promise.reject("SettingsError", "Could not retrieve automatic time setting.")
    }
  }
}
