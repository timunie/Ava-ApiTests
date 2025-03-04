import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ITopLevelImpl Interface


Defines a platform-specific top-level window implementation.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface ITopLevelImpl : IOptionalFeatureProvider, 
	IDisposable
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface ITopLevelImpl
	Inherits IOptionalFeatureProvider, IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type ITopLevelImpl = 
    interface
        interface IOptionalFeatureProvider
        interface IDisposable
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Platform/ITopLevelImpl.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td>IOptionalFeatureProvider, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## 
This interface is the common interface to <a href="T_Avalonia_Platform_IWindowImpl">IWindowImpl</a> and <a href="T_Avalonia_Platform_IPopupImpl">IPopupImpl</a>.

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_AcrylicCompensationLevels">AcrylicCompensationLevels</a></td>
<td>Gets the <a href="T_Avalonia_Controls_AcrylicPlatformCompensationLevels">AcrylicPlatformCompensationLevels</a> for the platform.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_ClientSize">ClientSize</a></td>
<td>Gets the client size of the toplevel.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_Closed">Closed</a></td>
<td>Gets or sets a method called when the underlying implementation is destroyed.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_Compositor">Compositor</a></td>
<td>Gets the compositor that's compatible with the toplevel</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_DesktopScaling">DesktopScaling</a></td>
<td>Gets the scaling factor for Window positioning and sizing.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_Handle">Handle</a></td>
<td>Get the platform handle.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_Input">Input</a></td>
<td>Gets or sets a method called when the toplevel receives input.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_LostFocus">LostFocus</a></td>
<td>Gets or sets a method called when the input focus is lost.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_Paint">Paint</a></td>
<td>Gets or sets a method called when the toplevel requires painting.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_RenderScaling">RenderScaling</a></td>
<td>Gets the scaling factor for the toplevel. This is used for rendering.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_Resized">Resized</a></td>
<td>Gets or sets a method called when the toplevel is resized.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_ScalingChanged">ScalingChanged</a></td>
<td>Gets or sets a method called when the toplevel's scaling changes.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_Surfaces">Surfaces</a></td>
<td>The list of native platform's surfaces that can be consumed by rendering subsystems.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_TransparencyLevel">TransparencyLevel</a></td>
<td>Gets the current <a href="T_Avalonia_Controls_WindowTransparencyLevel">WindowTransparencyLevel</a> of the TopLevel.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_TransparencyLevelChanged">TransparencyLevelChanged</a></td>
<td>Gets or sets a method called when the toplevel's TransparencyLevel changes.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_ITopLevelImpl_CreatePopup">CreatePopup()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable.dispose" target="_blank" rel="noopener noreferrer">Dispose()</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ITopLevelImpl_PointToClient">PointToClient(PixelPoint)</a></td>
<td>Converts a point from screen to client coordinates.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ITopLevelImpl_PointToScreen">PointToScreen(Point)</a></td>
<td>Converts a point from client to screen coordinates.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ITopLevelImpl_SetCursor">SetCursor(ICursorImpl)</a></td>
<td>Sets the cursor associated with the toplevel.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ITopLevelImpl_SetFrameThemeVariant">SetFrameThemeVariant(PlatformThemeVariant)</a></td>
<td>Sets the PlatformThemeVariant on the frame if it should be dark or light. Also applies for the mobile status bar.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ITopLevelImpl_SetInputRoot">SetInputRoot(IInputRoot)</a></td>
<td>Sets the IInputRoot for the toplevel.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ITopLevelImpl_SetTransparencyLevelHint">SetTransparencyLevelHint(IReadOnlyList(WindowTransparencyLevel))</a></td>
<td>Sets the <a href="T_Avalonia_Controls_WindowTransparencyLevel">WindowTransparencyLevel</a> hint of the TopLevel.</td>
</tr>
<tr>
<td>TryGetFeature(Type)</td>
<td><br />(Inherited from IOptionalFeatureProvider)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
