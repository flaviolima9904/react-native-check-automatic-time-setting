package com.checkautomatictimesetting

import com.facebook.react.BaseReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider
import java.util.HashMap

class CheckAutomaticTimeSettingPackage : BaseReactPackage() {
  override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? {
    return if (name == CheckAutomaticTimeSettingModule.NAME) {
      CheckAutomaticTimeSettingModule(reactContext)
    } else {
      null
    }
  }

  override fun getReactModuleInfoProvider() = ReactModuleInfoProvider {
    mapOf(
      CheckAutomaticTimeSettingModule.NAME to ReactModuleInfo(
        name = CheckAutomaticTimeSettingModule.NAME,
        className = CheckAutomaticTimeSettingModule.NAME,
        canOverrideExistingModule = false,
        needsEagerInit = false,
        isCxxModule = false,
        isTurboModule = true
      )
    )
  }
}
