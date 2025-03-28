# Win32PlatformOptions Class


Platform-specific options which apply to Windows.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Win32 (in Avalonia.Win32.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class Win32PlatformOptions
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class Win32PlatformOptions
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type Win32PlatformOptions = class end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Windows/Avalonia.Win32/Win32PlatformOptions.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  Win32PlatformOptions</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Win32PlatformOptions__ctor">Win32PlatformOptions()</a></td>
<td>Initializes a new instance of the Win32PlatformOptions class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Win32PlatformOptions_CompositionMode">CompositionMode</a></td>
<td>Gets or sets Avalonia composition modes with fallbacks. The first element in the array has the highest priority. The default value is: <a href="T_Avalonia_Win32CompositionMode">WinUIComposition</a>, <a href="T_Avalonia_Win32CompositionMode">DirectComposition</a>, <a href="T_Avalonia_Win32CompositionMode">RedirectionSurface</a>.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Win32PlatformOptions_CustomPlatformGraphics">CustomPlatformGraphics</a></td>
<td>Provides a way to use a custom-implemented graphics context such as a custom ISkiaGpu. When this property set <a href="P_Avalonia_Win32PlatformOptions_RenderingMode">RenderingMode</a> is ignored and <a href="P_Avalonia_Win32PlatformOptions_CompositionMode">CompositionMode</a> only accepts null or <a href="T_Avalonia_Win32CompositionMode">RedirectionSurface</a>.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Win32PlatformOptions_DpiAwareness">DpiAwareness</a></td>
<td>Gets or sets the application's DPI awareness.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Win32PlatformOptions_GraphicsAdapterSelectionCallback">GraphicsAdapterSelectionCallback</a></td>
<td>Specifies a callback method to be called when compositor needs to create a platform graphics device Currently is only called for AngleEgl rendering mode when DirectX 11 is used</td>
</tr>
<tr>
<td><a href="P_Avalonia_Win32PlatformOptions_OverlayPopups">OverlayPopups</a></td>
<td>Embeds popups to the window when set to true. The default value is false.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Win32PlatformOptions_RenderingMode">RenderingMode</a></td>
<td>Gets or sets Avalonia rendering modes with fallbacks. The first element in the array has the highest priority. The default value is: <a href="T_Avalonia_Win32RenderingMode">AngleEgl</a>, <a href="T_Avalonia_Win32RenderingMode">Software</a>.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Win32PlatformOptions_ShouldRenderOnUIThread">ShouldRenderOnUIThread</a></td>
<td>Render directly on the UI thread instead of using a dedicated render thread. Only applicable if <a href="P_Avalonia_Win32PlatformOptions_CompositionMode">CompositionMode</a> is set to <a href="T_Avalonia_Win32CompositionMode">RedirectionSurface</a>. This setting is only recommended for interop with systems that must render on the UI thread, such as WPF. This setting is false by default.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Win32PlatformOptions_WglProfiles">WglProfiles</a></td>
<td>Windows OpenGL profiles used when <a href="P_Avalonia_Win32PlatformOptions_RenderingMode">RenderingMode</a> is set to <a href="T_Avalonia_Win32RenderingMode">Wgl</a>. This setting is 4.0 and 3.2 by default.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Win32PlatformOptions_WinUICompositionBackdropCornerRadius">WinUICompositionBackdropCornerRadius</a></td>
<td>When <a href="P_Avalonia_Win32PlatformOptions_CompositionMode">CompositionMode</a> is set to <a href="T_Avalonia_Win32CompositionMode">WinUIComposition</a>, create rounded corner blur brushes If set to null the brushes will be created using default settings (sharp corners) This can be useful when you need a rounded-corner blurred Windows 10 app, or borderless Windows 11 app.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia">Avalonia Namespace</a>  

