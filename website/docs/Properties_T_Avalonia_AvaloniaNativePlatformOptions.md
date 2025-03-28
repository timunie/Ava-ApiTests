# AvaloniaNativePlatformOptions Properties




## Properties
<table>
<tr>
<td><a href="P_Avalonia_AvaloniaNativePlatformOptions_AppSandboxEnabled">AppSandboxEnabled</a></td>
<td>If you distribute your app in App Store - it should be with sandbox enabled. This parameter enables <a href="M_Avalonia_Platform_Storage_IStorageItem_SaveBookmarkAsync">SaveBookmarkAsync()</a> and related APIs, as well as wrapping all storage related calls in secure context. The default value is true.</td>
</tr>
<tr>
<td><a href="P_Avalonia_AvaloniaNativePlatformOptions_AvaloniaNativeLibraryPath">AvaloniaNativeLibraryPath</a></td>
<td>This property should be used in case you want to build Avalonia OSX native part by yourself and make your Avalonia app run with it. The default value is null.</td>
</tr>
<tr>
<td><a href="P_Avalonia_AvaloniaNativePlatformOptions_OverlayPopups">OverlayPopups</a></td>
<td>Embeds popups to the window when set to true. The default value is false.</td>
</tr>
<tr>
<td><a href="P_Avalonia_AvaloniaNativePlatformOptions_RenderingMode">RenderingMode</a></td>
<td>Gets or sets Avalonia rendering modes with fallbacks. The first element in the array has the highest priority. The default value is: <a href="T_Avalonia_AvaloniaNativeRenderingMode">OpenGl</a>, <a href="T_Avalonia_AvaloniaNativeRenderingMode">Software</a>.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaNativePlatformOptions">AvaloniaNativePlatformOptions Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

