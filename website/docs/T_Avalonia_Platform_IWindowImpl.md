import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# IWindowImpl Interface


Defines a platform-specific window implementation.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IWindowImpl : IWindowBaseImpl, 
	ITopLevelImpl, IOptionalFeatureProvider, IDisposable
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IWindowImpl
	Inherits IWindowBaseImpl, ITopLevelImpl, IOptionalFeatureProvider, IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IWindowImpl = 
    interface
        interface IWindowBaseImpl
        interface ITopLevelImpl
        interface IOptionalFeatureProvider
        interface IDisposable
    end
```
</TabItem>
</Tabs>

<table>
<tr><td><strong>Implements</strong></td><td>IOptionalFeatureProvider, <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>, <a href="T_Avalonia_Platform_IWindowBaseImpl">IWindowBaseImpl</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_AcrylicCompensationLevels">AcrylicCompensationLevels</a></td>
<td>Gets the <a href="T_Avalonia_Controls_AcrylicPlatformCompensationLevels">AcrylicPlatformCompensationLevels</a> for the platform.<br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_IWindowBaseImpl_Activated">Activated</a></td>
<td>Gets or sets a method called when the window is activated (receives focus).<br />(Inherited from <a href="T_Avalonia_Platform_IWindowBaseImpl">IWindowBaseImpl</a>)</td>
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
<td><a href="P_Avalonia_Platform_IWindowImpl_Closing">Closing</a></td>
<td>Gets or sets a method called before the underlying implementation is destroyed. Return true to prevent the underlying implementation from closing.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_Compositor">Compositor</a></td>
<td>Gets the compositor that's compatible with the toplevel<br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_IWindowBaseImpl_Deactivated">Deactivated</a></td>
<td>Gets or sets a method called when the window is deactivated (loses focus).<br />(Inherited from <a href="T_Avalonia_Platform_IWindowBaseImpl">IWindowBaseImpl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_DesktopScaling">DesktopScaling</a></td>
<td>Gets the scaling factor for Window positioning and sizing.<br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_IWindowImpl_ExtendClientAreaToDecorationsChanged">ExtendClientAreaToDecorationsChanged</a></td>
<td>Gets or Sets an action that is called whenever one of the extend client area properties changed.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_IWindowImpl_ExtendedMargins">ExtendedMargins</a></td>
<td>Gets a thickness that describes the amount each side of the non-client area extends into the client area. It includes the titlebar.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_IWindowBaseImpl_FrameSize">FrameSize</a></td>
<td>Gets the total size of the toplevel, excluding shadows.<br />(Inherited from <a href="T_Avalonia_Platform_IWindowBaseImpl">IWindowBaseImpl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_IWindowImpl_GotInputWhenDisabled">GotInputWhenDisabled</a></td>
<td>Called when a disabled window received input. Can be used to activate child windows.</td>
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
<td><a href="P_Avalonia_Platform_IWindowImpl_IsClientAreaExtendedToDecorations">IsClientAreaExtendedToDecorations</a></td>
<td>Gets a value to indicate if the platform was able to extend client area to non-client area.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_LostFocus">LostFocus</a></td>
<td>Gets or sets a method called when the input focus is lost.<br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_IWindowBaseImpl_MaxAutoSizeHint">MaxAutoSizeHint</a></td>
<td>Gets a maximum client size hint for an auto-sizing window, in device-independent pixels.<br />(Inherited from <a href="T_Avalonia_Platform_IWindowBaseImpl">IWindowBaseImpl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_IWindowImpl_NeedsManagedDecorations">NeedsManagedDecorations</a></td>
<td>Gets a flag that indicates if Managed decorations i.e. caption buttons are required. This property is used when <a href="P_Avalonia_Platform_IWindowImpl_IsClientAreaExtendedToDecorations">IsClientAreaExtendedToDecorations</a> is set.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_IWindowImpl_OffScreenMargin">OffScreenMargin</a></td>
<td>Gets a thickness that describes the margin around the window that is offscreen. This may happen when a window is maximized and <a href="P_Avalonia_Platform_IWindowImpl_IsClientAreaExtendedToDecorations">IsClientAreaExtendedToDecorations</a> is set.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_Paint">Paint</a></td>
<td>Gets or sets a method called when the toplevel requires painting.<br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_IWindowBaseImpl_Position">Position</a></td>
<td>Gets the position of the window in device pixels.<br />(Inherited from <a href="T_Avalonia_Platform_IWindowBaseImpl">IWindowBaseImpl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_IWindowBaseImpl_PositionChanged">PositionChanged</a></td>
<td>Gets or sets a method called when the window's position changes.<br />(Inherited from <a href="T_Avalonia_Platform_IWindowBaseImpl">IWindowBaseImpl</a>)</td>
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
<tr>
<td><a href="P_Avalonia_Platform_IWindowImpl_WindowState">WindowState</a></td>
<td>Gets or sets the minimized/maximized state of the window.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_IWindowImpl_WindowStateChanged">WindowStateChanged</a></td>
<td>Gets or sets a method called when the minimized/maximized state of the window changes.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_IWindowBaseImpl_Activate">Activate</a></td>
<td>Activates the window.<br />(Inherited from <a href="T_Avalonia_Platform_IWindowBaseImpl">IWindowBaseImpl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_BeginMoveDrag">BeginMoveDrag</a></td>
<td>Starts moving a window with left button being held. Should be called from left mouse button press event handler.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_BeginResizeDrag">BeginResizeDrag</a></td>
<td>Starts resizing a window. This function is used if an application has window resizing controls. Should be called from left mouse button press event handler</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_CanResize">CanResize</a></td>
<td>Enables or disables resizing of the window</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ITopLevelImpl_CreatePopup">CreatePopup</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable.dispose" target="_blank" rel="noopener noreferrer">Dispose</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_GetWindowsZOrder">GetWindowsZOrder</a></td>
<td>Fills zOrder with numbers that represent the relative order of the windows in the z-order. The topmost window should have the highest number. Both the windows and zOrder lists are expected to be the same length.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowBaseImpl_Hide">Hide</a></td>
<td>Hides the window.<br />(Inherited from <a href="T_Avalonia_Platform_IWindowBaseImpl">IWindowBaseImpl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_Move">Move</a></td>
<td>Sets the client size of the top level.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ITopLevelImpl_PointToClient">PointToClient</a></td>
<td>Converts a point from screen to client coordinates.<br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ITopLevelImpl_PointToScreen">PointToScreen</a></td>
<td>Converts a point from client to screen coordinates.<br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_Resize">Resize</a></td>
<td>Sets the client size of the top level.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ITopLevelImpl_SetCursor">SetCursor</a></td>
<td>Sets the cursor associated with the toplevel.<br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_SetEnabled">SetEnabled</a></td>
<td>Disables the window for example when a modal dialog is open.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_SetExtendClientAreaChromeHints">SetExtendClientAreaChromeHints</a></td>
<td>Sets hints that configure how the client area extends.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_SetExtendClientAreaTitleBarHeightHint">SetExtendClientAreaTitleBarHeightHint</a></td>
<td>Sets how big the non-client titlebar area should be.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_SetExtendClientAreaToDecorationsHint">SetExtendClientAreaToDecorationsHint</a></td>
<td>Sets if the ClientArea is extended into the non-client area.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ITopLevelImpl_SetFrameThemeVariant">SetFrameThemeVariant</a></td>
<td>Sets the PlatformThemeVariant on the frame if it should be dark or light. Also applies for the mobile status bar.<br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_SetIcon">SetIcon</a></td>
<td>Sets the icon of this window.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ITopLevelImpl_SetInputRoot">SetInputRoot</a></td>
<td>Sets the IInputRoot for the toplevel.<br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_SetMinMaxSize">SetMinMaxSize</a></td>
<td>Minimum width of the window.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_SetParent">SetParent</a></td>
<td>Sets the parent of the window.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_SetSystemDecorations">SetSystemDecorations</a></td>
<td>Enables or disables system window decorations (title bar, buttons, etc)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_SetTitle">SetTitle</a></td>
<td>Sets the title of the window.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowBaseImpl_SetTopmost">SetTopmost</a></td>
<td>Sets whether this window appears on top of all other windows<br />(Inherited from <a href="T_Avalonia_Platform_IWindowBaseImpl">IWindowBaseImpl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ITopLevelImpl_SetTransparencyLevelHint">SetTransparencyLevelHint</a></td>
<td>Sets the <a href="T_Avalonia_Controls_WindowTransparencyLevel">WindowTransparencyLevel</a> hint of the TopLevel.<br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowBaseImpl_Show">Show</a></td>
<td>Shows the window.<br />(Inherited from <a href="T_Avalonia_Platform_IWindowBaseImpl">IWindowBaseImpl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_ShowTaskbarIcon">ShowTaskbarIcon</a></td>
<td>Enables or disables the taskbar icon</td>
</tr>
<tr>
<td>TryGetFeature</td>
<td><br />(Inherited from IOptionalFeatureProvider)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
