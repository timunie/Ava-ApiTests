# X11PlatformOptions Properties




## Properties
<table>
<tr>
<td><a href="P_Avalonia_X11PlatformOptions_EnableIme">EnableIme</a></td>
<td>Determines whether to use IME. IME would be enabled by default if the current user input language is one of the following: Mandarin, Japanese, Vietnamese or Korean.</td>
</tr>
<tr>
<td><a href="P_Avalonia_X11PlatformOptions_EnableInputFocusProxy">EnableInputFocusProxy</a></td>
<td>Determines whether to use Input Focus Proxy. The default value is false.</td>
</tr>
<tr>
<td><a href="P_Avalonia_X11PlatformOptions_EnableMultiTouch">EnableMultiTouch</a></td>
<td>Enables multitouch support. The default value is true.</td>
</tr>
<tr>
<td><a href="P_Avalonia_X11PlatformOptions_EnableSessionManagement">EnableSessionManagement</a></td>
<td>Determines whether to enable support for the X Session Management Protocol.</td>
</tr>
<tr>
<td><a href="P_Avalonia_X11PlatformOptions_ExterinalGLibMainLoopExceptionLogger">ExterinalGLibMainLoopExceptionLogger</a></td>
<td>If Avalonia is in control of a run loop, we propagate exceptions by stopping the run loop frame and rethrowing an exception. However, if there is no Avalonia-controlled run loop frame, there is no way to report such exceptions, since allowing those to escape native-&gt;managed call boundary will likely brick GLib machinery since it's not aware of managed Exceptions This property allows to inspect such exceptions before they will be ignored</td>
</tr>
<tr>
<td><a href="P_Avalonia_X11PlatformOptions_GlProfiles">GlProfiles</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_X11PlatformOptions_GlxRendererBlacklist">GlxRendererBlacklist</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_X11PlatformOptions_OverlayPopups">OverlayPopups</a></td>
<td>Embeds popups to the window when set to true. The default value is false.</td>
</tr>
<tr>
<td><a href="P_Avalonia_X11PlatformOptions_RenderingMode">RenderingMode</a></td>
<td>Gets or sets Avalonia rendering modes with fallbacks. The first element in the array has the highest priority. The default value is: <a href="T_Avalonia_X11RenderingMode">Glx</a>, <a href="T_Avalonia_X11RenderingMode">Software</a>.</td>
</tr>
<tr>
<td><a href="P_Avalonia_X11PlatformOptions_ShouldRenderOnUIThread">ShouldRenderOnUIThread</a></td>
<td>Render directly on the UI thread instead of using a dedicated render thread. This can be usable if your device don't have multiple cores to begin with. This setting is false by default.</td>
</tr>
<tr>
<td><a href="P_Avalonia_X11PlatformOptions_UseDBusFilePicker">UseDBusFilePicker</a></td>
<td>Enables DBus file picker instead of GTK. The default value is true.</td>
</tr>
<tr>
<td><a href="P_Avalonia_X11PlatformOptions_UseDBusMenu">UseDBusMenu</a></td>
<td>Enables global menu support on Linux desktop environments where it's supported (e. g. XFCE and MATE with plugin, KDE, etc). The default value is true.</td>
</tr>
<tr>
<td><a href="P_Avalonia_X11PlatformOptions_UseGLibMainLoop">UseGLibMainLoop</a></td>
<td>If this option is set to true, GMainLoop and GSource based dispatcher implementation will be used instead of epoll-based one. Use this if you need to use GLib-based libraries on the main thread</td>
</tr>
<tr>
<td><a href="P_Avalonia_X11PlatformOptions_UseRetainedFramebuffer">UseRetainedFramebuffer</a></td>
<td>Retain window framebuffer contents if using CPU rendering mode. This will keep an offscreen bitmap for each window with contents of the previous frame While improving performance by saving a blit, it will increase memory consumption if you have many windows</td>
</tr>
<tr>
<td><a href="P_Avalonia_X11PlatformOptions_WmClass">WmClass</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_X11PlatformOptions">X11PlatformOptions Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

