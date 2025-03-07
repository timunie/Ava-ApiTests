# IWindowBaseImpl Interface




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IWindowBaseImpl : ITopLevelImpl, 
	IOptionalFeatureProvider, IDisposable
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IWindowBaseImpl
	Inherits ITopLevelImpl, IOptionalFeatureProvider, IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IWindowBaseImpl = 
    interface
        interface ITopLevelImpl
        interface IOptionalFeatureProvider
        interface IDisposable
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Platform/IWindowBaseImpl.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Platform_IOptionalFeatureProvider">IOptionalFeatureProvider</a>, <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_AcrylicCompensationLevels">AcrylicCompensationLevels</a></td>
<td>Gets the <a href="T_Avalonia_Controls_AcrylicPlatformCompensationLevels">AcrylicPlatformCompensationLevels</a> for the platform.<br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_IWindowBaseImpl_Activated">Activated</a></td>
<td>Gets or sets a method called when the window is activated (receives focus).</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_ClientSize">ClientSize</a></td>
<td>Gets the client size of the toplevel.<br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_Closed">Closed</a></td>
<td>Gets or sets a method called when the underlying implementation is destroyed.<br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_Compositor">Compositor</a></td>
<td>Gets the compositor that's compatible with the toplevel<br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_IWindowBaseImpl_Deactivated">Deactivated</a></td>
<td>Gets or sets a method called when the window is deactivated (loses focus).</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_DesktopScaling">DesktopScaling</a></td>
<td>Gets the scaling factor for Window positioning and sizing.<br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_IWindowBaseImpl_FrameSize">FrameSize</a></td>
<td>Gets the total size of the toplevel, excluding shadows.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_Handle">Handle</a></td>
<td>Get the platform handle.<br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_Input">Input</a></td>
<td>Gets or sets a method called when the toplevel receives input.<br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_LostFocus">LostFocus</a></td>
<td>Gets or sets a method called when the input focus is lost.<br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_IWindowBaseImpl_MaxAutoSizeHint">MaxAutoSizeHint</a></td>
<td>Gets a maximum client size hint for an auto-sizing window, in device-independent pixels.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_Paint">Paint</a></td>
<td>Gets or sets a method called when the toplevel requires painting.<br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_IWindowBaseImpl_Position">Position</a></td>
<td>Gets the position of the window in device pixels.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_IWindowBaseImpl_PositionChanged">PositionChanged</a></td>
<td>Gets or sets a method called when the window's position changes.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_RenderScaling">RenderScaling</a></td>
<td>Gets the scaling factor for the toplevel. This is used for rendering.<br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_Resized">Resized</a></td>
<td>Gets or sets a method called when the toplevel is resized.<br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_ScalingChanged">ScalingChanged</a></td>
<td>Gets or sets a method called when the toplevel's scaling changes.<br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_Surfaces">Surfaces</a></td>
<td>The list of native platform's surfaces that can be consumed by rendering subsystems.<br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_TransparencyLevel">TransparencyLevel</a></td>
<td>Gets the current <a href="T_Avalonia_Controls_WindowTransparencyLevel">WindowTransparencyLevel</a> of the TopLevel.<br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_TransparencyLevelChanged">TransparencyLevelChanged</a></td>
<td>Gets or sets a method called when the toplevel's TransparencyLevel changes.<br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_IWindowBaseImpl_Activate">Activate()</a></td>
<td>Activates the window.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ITopLevelImpl_CreatePopup">CreatePopup()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable.dispose" target="_blank" rel="noopener noreferrer">Dispose()</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowBaseImpl_Hide">Hide()</a></td>
<td>Hides the window.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ITopLevelImpl_PointToClient">PointToClient(PixelPoint)</a></td>
<td>Converts a point from screen to client coordinates.<br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ITopLevelImpl_PointToScreen">PointToScreen(Point)</a></td>
<td>Converts a point from client to screen coordinates.<br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ITopLevelImpl_SetCursor">SetCursor(ICursorImpl)</a></td>
<td>Sets the cursor associated with the toplevel.<br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ITopLevelImpl_SetFrameThemeVariant">SetFrameThemeVariant(PlatformThemeVariant)</a></td>
<td>Sets the <a href="T_Avalonia_Platform_PlatformThemeVariant">PlatformThemeVariant</a> on the frame if it should be dark or light. Also applies for the mobile status bar.<br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ITopLevelImpl_SetInputRoot">SetInputRoot(IInputRoot)</a></td>
<td>Sets the <a href="T_Avalonia_Input_IInputRoot">IInputRoot</a> for the toplevel.<br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowBaseImpl_SetTopmost">SetTopmost(Boolean)</a></td>
<td>Sets whether this window appears on top of all other windows</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ITopLevelImpl_SetTransparencyLevelHint">SetTransparencyLevelHint(IReadOnlyList(WindowTransparencyLevel))</a></td>
<td>Sets the <a href="T_Avalonia_Controls_WindowTransparencyLevel">WindowTransparencyLevel</a> hint of the TopLevel.<br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowBaseImpl_Show">Show(Boolean, Boolean)</a></td>
<td>Shows the window.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IOptionalFeatureProvider_TryGetFeature">TryGetFeature(Type)</a></td>
<td>Queries for an optional feature.<br />(Inherited from <a href="T_Avalonia_Platform_IOptionalFeatureProvider">IOptionalFeatureProvider</a>)</td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_OptionalFeatureProviderExtensions_TryGetFeature__1_1">TryGetFeature(T)()</a></td>
<td>Queries for an optional feature.<br />(Defined by <a href="T_Avalonia_Platform_OptionalFeatureProviderExtensions">OptionalFeatureProviderExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_OptionalFeatureProviderExtensions_TryGetFeature__1">TryGetFeature(T)(T)</a></td>
<td>Queries for an optional feature.<br />(Defined by <a href="T_Avalonia_Platform_OptionalFeatureProviderExtensions">OptionalFeatureProviderExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
