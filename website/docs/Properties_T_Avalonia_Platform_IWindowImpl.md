import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# IWindowImpl Properties




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

## See Also


#### Reference
<a href="T_Avalonia_Platform_IWindowImpl">IWindowImpl Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
