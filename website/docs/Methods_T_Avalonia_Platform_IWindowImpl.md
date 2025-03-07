# IWindowImpl Methods




## Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_IWindowBaseImpl_Activate">Activate()</a></td>
<td>Activates the window.<br />(Inherited from <a href="T_Avalonia_Platform_IWindowBaseImpl">IWindowBaseImpl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_BeginMoveDrag">BeginMoveDrag(PointerPressedEventArgs)</a></td>
<td>Starts moving a window with left button being held. Should be called from left mouse button press event handler.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_BeginResizeDrag">BeginResizeDrag(WindowEdge, PointerPressedEventArgs)</a></td>
<td>Starts resizing a window. This function is used if an application has window resizing controls. Should be called from left mouse button press event handler</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_CanResize">CanResize(Boolean)</a></td>
<td>Enables or disables resizing of the window</td>
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
<td><a href="M_Avalonia_Platform_IWindowImpl_GetWindowsZOrder">GetWindowsZOrder(Span(Window), Span(Int64))</a></td>
<td>Fills zOrder with numbers that represent the relative order of the windows in the z-order. The topmost window should have the highest number. Both the windows and zOrder lists are expected to be the same length.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowBaseImpl_Hide">Hide()</a></td>
<td>Hides the window.<br />(Inherited from <a href="T_Avalonia_Platform_IWindowBaseImpl">IWindowBaseImpl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_Move">Move(PixelPoint)</a></td>
<td>Sets the client size of the top level.</td>
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
<td><a href="M_Avalonia_Platform_IWindowImpl_Resize">Resize(Size, WindowResizeReason)</a></td>
<td>Sets the client size of the top level.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ITopLevelImpl_SetCursor">SetCursor(ICursorImpl)</a></td>
<td>Sets the cursor associated with the toplevel.<br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_SetEnabled">SetEnabled(Boolean)</a></td>
<td>Disables the window for example when a modal dialog is open.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_SetExtendClientAreaChromeHints">SetExtendClientAreaChromeHints(ExtendClientAreaChromeHints)</a></td>
<td>Sets hints that configure how the client area extends.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_SetExtendClientAreaTitleBarHeightHint">SetExtendClientAreaTitleBarHeightHint(Double)</a></td>
<td>Sets how big the non-client titlebar area should be.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_SetExtendClientAreaToDecorationsHint">SetExtendClientAreaToDecorationsHint(Boolean)</a></td>
<td>Sets if the ClientArea is extended into the non-client area.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ITopLevelImpl_SetFrameThemeVariant">SetFrameThemeVariant(PlatformThemeVariant)</a></td>
<td>Sets the <a href="T_Avalonia_Platform_PlatformThemeVariant">PlatformThemeVariant</a> on the frame if it should be dark or light. Also applies for the mobile status bar.<br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_SetIcon">SetIcon(IWindowIconImpl)</a></td>
<td>Sets the icon of this window.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ITopLevelImpl_SetInputRoot">SetInputRoot(IInputRoot)</a></td>
<td>Sets the <a href="T_Avalonia_Input_IInputRoot">IInputRoot</a> for the toplevel.<br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_SetMinMaxSize">SetMinMaxSize(Size, Size)</a></td>
<td>Minimum width of the window.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_SetParent">SetParent(IWindowImpl)</a></td>
<td>Sets the parent of the window.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_SetSystemDecorations">SetSystemDecorations(SystemDecorations)</a></td>
<td>Enables or disables system window decorations (title bar, buttons, etc)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_SetTitle">SetTitle(String)</a></td>
<td>Sets the title of the window.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowBaseImpl_SetTopmost">SetTopmost(Boolean)</a></td>
<td>Sets whether this window appears on top of all other windows<br />(Inherited from <a href="T_Avalonia_Platform_IWindowBaseImpl">IWindowBaseImpl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ITopLevelImpl_SetTransparencyLevelHint">SetTransparencyLevelHint(IReadOnlyList(WindowTransparencyLevel))</a></td>
<td>Sets the <a href="T_Avalonia_Controls_WindowTransparencyLevel">WindowTransparencyLevel</a> hint of the TopLevel.<br />(Inherited from <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowBaseImpl_Show">Show(Boolean, Boolean)</a></td>
<td>Shows the window.<br />(Inherited from <a href="T_Avalonia_Platform_IWindowBaseImpl">IWindowBaseImpl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IWindowImpl_ShowTaskbarIcon">ShowTaskbarIcon(Boolean)</a></td>
<td>Enables or disables the taskbar icon</td>
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
<a href="T_Avalonia_Platform_IWindowImpl">IWindowImpl Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
