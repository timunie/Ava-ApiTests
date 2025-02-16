---
title:IWindowImpl Interface
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# IWindowImpl Interface




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.4

**C#**
``` C#
[UnstableAttribute]
public interface IWindowImpl : IWindowBaseImpl, 
	ITopLevelImpl, IOptionalFeatureProvider, IDisposable
```
**VB**
``` VB
<UnstableAttribute>
Public Interface IWindowImpl
	Inherits IWindowBaseImpl, ITopLevelImpl, IOptionalFeatureProvider, IDisposable
```
**F#**
``` F#
[<UnstableAttribute>]
type IWindowImpl = 
    interface
        interface IWindowBaseImpl
        interface ITopLevelImpl
        interface IOptionalFeatureProvider
        interface IDisposable
    end
```

<table><tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Platform_IOptionalFeatureProvider">IOptionalFeatureProvider</a>, <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>, <a href="T_Avalonia_Platform_IWindowBaseImpl">IWindowBaseImpl</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_AcrylicCompensationLevels">AcrylicCompensationLevels</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Platform_IWindowBaseImpl_Activated">Activated</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IWindowBaseImpl">IWindowBaseImpl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_ClientSize">ClientSize</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_Closed">Closed</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Platform_IWindowImpl_Closing">Closing</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_Compositor">Compositor</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Platform_IWindowBaseImpl_Deactivated">Deactivated</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IWindowBaseImpl">IWindowBaseImpl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_DesktopScaling">DesktopScaling</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Platform_IWindowImpl_ExtendClientAreaToDecorationsChanged">ExtendClientAreaToDecorationsChanged</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Platform_IWindowImpl_ExtendedMargins">ExtendedMargins</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Platform_IWindowBaseImpl_FrameSize">FrameSize</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IWindowBaseImpl">IWindowBaseImpl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Platform_IWindowImpl_GotInputWhenDisabled">GotInputWhenDisabled</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_Handle">Handle</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_Input">Input</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Platform_IWindowImpl_IsClientAreaExtendedToDecorations">IsClientAreaExtendedToDecorations</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_LostFocus">LostFocus</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Platform_IWindowBaseImpl_MaxAutoSizeHint">MaxAutoSizeHint</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IWindowBaseImpl">IWindowBaseImpl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Platform_IWindowImpl_NeedsManagedDecorations">NeedsManagedDecorations</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Platform_IWindowImpl_OffScreenMargin">OffScreenMargin</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_Paint">Paint</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Platform_IWindowBaseImpl_Position">Position</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IWindowBaseImpl">IWindowBaseImpl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Platform_IWindowBaseImpl_PositionChanged">PositionChanged</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IWindowBaseImpl">IWindowBaseImpl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_RenderScaling">RenderScaling</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_Resized">Resized</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_ScalingChanged">ScalingChanged</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_Surfaces">Surfaces</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_TransparencyLevel">TransparencyLevel</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Platform_ITopLevelImpl_TransparencyLevelChanged">TransparencyLevelChanged</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Platform_IWindowImpl_WindowState">WindowState</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Platform_IWindowImpl_WindowStateChanged">WindowStateChanged</a></td>
<td> </td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_IWindowBaseImpl_Activate">Activate()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IWindowBaseImpl">IWindowBaseImpl</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_BeginMoveDrag">BeginMoveDrag(PointerPressedEventArgs)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_BeginResizeDrag">BeginResizeDrag(WindowEdge, PointerPressedEventArgs)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_CanResize">CanResize(Boolean)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_ITopLevelImpl_CreatePopup">CreatePopup()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable.dispose" target="_blank" rel="noopener noreferrer">Dispose()</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_GetWindowsZOrder">GetWindowsZOrder(Span(Window), Span(Int64))</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowBaseImpl_Hide">Hide()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IWindowBaseImpl">IWindowBaseImpl</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_Move">Move(PixelPoint)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_ITopLevelImpl_PointToClient">PointToClient(PixelPoint)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_ITopLevelImpl_PointToScreen">PointToScreen(Point)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_Resize">Resize(Size, WindowResizeReason)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_ITopLevelImpl_SetCursor">SetCursor(ICursorImpl)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_SetEnabled">SetEnabled(Boolean)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_SetExtendClientAreaChromeHints">SetExtendClientAreaChromeHints(ExtendClientAreaChromeHints)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_SetExtendClientAreaTitleBarHeightHint">SetExtendClientAreaTitleBarHeightHint(Double)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_SetExtendClientAreaToDecorationsHint">SetExtendClientAreaToDecorationsHint(Boolean)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_ITopLevelImpl_SetFrameThemeVariant">SetFrameThemeVariant(PlatformThemeVariant)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_SetIcon">SetIcon(IWindowIconImpl)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_ITopLevelImpl_SetInputRoot">SetInputRoot(IInputRoot)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_SetMinMaxSize">SetMinMaxSize(Size, Size)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_SetParent">SetParent(IWindowImpl)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_SetSystemDecorations">SetSystemDecorations(SystemDecorations)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_SetTitle">SetTitle(String)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowBaseImpl_SetTopmost">SetTopmost(Boolean)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IWindowBaseImpl">IWindowBaseImpl</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_ITopLevelImpl_SetTransparencyLevelHint">SetTransparencyLevelHint(IReadOnlyList(WindowTransparencyLevel))</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowBaseImpl_Show">Show(Boolean, Boolean)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IWindowBaseImpl">IWindowBaseImpl</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_ShowTaskbarIcon">ShowTaskbarIcon(Boolean)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IOptionalFeatureProvider_TryGetFeature">TryGetFeature(Type)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IOptionalFeatureProvider">IOptionalFeatureProvider</a>)</td></tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_OptionalFeatureProviderExtensions_TryGetFeature__1_1">TryGetFeature(T)()</a></td>
<td><br />(Defined by <a href="T_Avalonia_Platform_OptionalFeatureProviderExtensions">OptionalFeatureProviderExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_OptionalFeatureProviderExtensions_TryGetFeature__1">TryGetFeature(T)(T)</a></td>
<td><br />(Defined by <a href="T_Avalonia_Platform_OptionalFeatureProviderExtensions">OptionalFeatureProviderExtensions</a>)</td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
