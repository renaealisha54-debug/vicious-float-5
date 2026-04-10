private fun checkOverlayPermission() {
    if (!Settings.canDrawOverlays(this)) {
        val intent = Intent(
            Settings.ACTION_MANAGE_OVERLAY_PERMISSION,
            Uri.parse("package:$packageName")
        )
        [span_17](start_span)// Redirects to system settings for toggle[span_17](end_span)
        startActivityForResult(intent, 123)
    } else {
        startService(Intent(this, ViciousOverlayService::class.java))
    }
}
