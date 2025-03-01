import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Window Class


A top-level window.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class Window : WindowBase, IFocusScope, 
	ILayoutRoot
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class Window
	Inherits WindowBase
	Implements IFocusScope, ILayoutRoot
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type Window = 
    class
        inherit WindowBase
        interface IFocusScope
        interface ILayoutRoot
    end
```
</TabItem>
</Tabs>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  AvaloniaObject  →  Animatable  →  StyledElement  →  Visual  →  Layoutable  →  Interactive  →  InputElement  →  <a href="T_Avalonia_Controls_Control">Control</a>  →  <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>  →  <a href="T_Avalonia_Controls_ContentControl">ContentControl</a>  →  <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>  →  <a href="T_Avalonia_Controls_WindowBase">WindowBase</a>  →  Window</td></tr>
<tr><td><strong>Implements</strong></td><td>IFocusScope, ILayoutRoot</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_Window__ctor">Window()</a></td>
<td>Initializes a new instance of the Window class.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Window__ctor_1">Window(IWindowImpl)</a></td>
<td>Initializes a new instance of the Window class.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td>ActualThemeVariant</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TopLevel_ActualTransparencyLevel">ActualTransparencyLevel</a></td>
<td>Gets the achieved <a href="T_Avalonia_Controls_WindowTransparencyLevel">WindowTransparencyLevel</a> that the platform was able to provide.<br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_Background">Background</a></td>
<td>Gets or sets the brush used to draw the control's background.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_BackgroundSizing">BackgroundSizing</a></td>
<td>Gets or sets how the control's background is drawn relative to the control's border.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_BorderBrush">BorderBrush</a></td>
<td>Gets or sets the brush used to draw the control's border.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_BorderThickness">BorderThickness</a></td>
<td>Gets or sets the thickness of the control's border.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td>Bounds</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TopLevel_BypassFlowDirectionPolicies">BypassFlowDirectionPolicies</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Window_CanResize">CanResize</a></td>
<td>Enables or disables resizing of the window.</td>
</tr>
<tr>
<td>Classes</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TopLevel_ClientSize">ClientSize</a></td>
<td>Gets or sets the client size of the window.<br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td>Clip</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TopLevel_Clipboard">Clipboard</a></td>
<td>Gets the platform's clipboard implementation<br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td>ClipToBounds</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Window_ClosingBehavior">ClosingBehavior</a></td>
<td>Gets or sets a value indicating how the <a href="E_Avalonia_Controls_Window_Closing">Closing</a> event behaves in the presence of child windows.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_ContentControl_Content">Content</a></td>
<td>Gets or sets the content to display.<br />(Inherited from <a href="T_Avalonia_Controls_ContentControl">ContentControl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_ContentControl_ContentTemplate">ContentTemplate</a></td>
<td>Gets or sets the data template used to display the content of the control.<br />(Inherited from <a href="T_Avalonia_Controls_ContentControl">ContentControl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Control_ContextFlyout">ContextFlyout</a></td>
<td>Gets or sets a context flyout to the control<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Control_ContextMenu">ContextMenu</a></td>
<td>Gets or sets a context menu to the control.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_CornerRadius">CornerRadius</a></td>
<td>Gets or sets the radius of the border rounded corners.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td>Cursor</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>DataContext</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Control_DataTemplates">DataTemplates</a></td>
<td>Gets or sets the data templates for the control.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td>DesiredSize</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_WindowBase_DesktopScaling">DesktopScaling</a></td>
<td>Gets the scaling factor for Window positioning and sizing.<br />(Inherited from <a href="T_Avalonia_Controls_WindowBase">WindowBase</a>)</td>
</tr>
<tr>
<td>Effect</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Window_ExtendClientAreaChromeHints">ExtendClientAreaChromeHints</a></td>
<td>Gets or Sets the <a href="T_Avalonia_Platform_ExtendClientAreaChromeHints">ExtendClientAreaChromeHints</a> that control how the chrome looks when the client area is extended.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Window_ExtendClientAreaTitleBarHeightHint">ExtendClientAreaTitleBarHeightHint</a></td>
<td>Gets or Sets the TitlebarHeightHint for when the client area is extended. A value of -1 will cause the titlebar to be auto sized to the OS default. Any other positive value will cause the titlebar to assume that height.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Window_ExtendClientAreaToDecorationsHint">ExtendClientAreaToDecorationsHint</a></td>
<td>Gets or sets if the ClientArea is Extended into the Window Decorations (chrome or border).</td>
</tr>
<tr>
<td>FlowDirection</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td>Focusable</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Control_FocusAdorner">FocusAdorner</a></td>
<td>Gets or sets the control's focus adorner.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TopLevel_FocusManager">FocusManager</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_FontFamily">FontFamily</a></td>
<td>Gets or sets the font family used to draw the control's text.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_FontFeatures">FontFeatures</a></td>
<td>Gets or sets the font features turned on/off.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_FontSize">FontSize</a></td>
<td>Gets or sets the size of the control's text in points.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_FontStretch">FontStretch</a></td>
<td>Gets or sets the font stretch used to draw the control's text.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_FontStyle">FontStyle</a></td>
<td>Gets or sets the font style used to draw the control's text.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_FontWeight">FontWeight</a></td>
<td>Gets or sets the font weight used to draw the control's text.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_Foreground">Foreground</a></td>
<td>Gets or sets the brush used to draw the control's text and other foreground elements.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TopLevel_FrameSize">FrameSize</a></td>
<td>Gets or sets the total size of the window.<br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td>GestureRecognizers</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>HasMirrorTransform</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td>Height</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>HorizontalAlignment</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_ContentControl_HorizontalContentAlignment">HorizontalContentAlignment</a></td>
<td>Gets or sets the horizontal alignment of the content within the control.<br />(Inherited from <a href="T_Avalonia_Controls_ContentControl">ContentControl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Window_Icon">Icon</a></td>
<td>Gets or sets the icon of the window.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_WindowBase_IgnoreVisibilityChanges">IgnoreVisibilityChanges</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_WindowBase">WindowBase</a>)</td>
</tr>
<tr>
<td>InheritanceParent</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TopLevel_InputPane">InputPane</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TopLevel_InsetsManager">InsetsManager</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_WindowBase_IsActive">IsActive</a></td>
<td>Gets a value that indicates whether the window is active.<br />(Inherited from <a href="T_Avalonia_Controls_WindowBase">WindowBase</a>)</td>
</tr>
<tr>
<td>IsArrangeValid</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>IsEffectivelyEnabled</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>IsEffectivelyVisible</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td>IsEnabled</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>IsEnabledCore</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Window_IsExtendedIntoWindowDecorations">IsExtendedIntoWindowDecorations</a></td>
<td>Gets if the ClientArea is Extended into the Window Decorations.</td>
</tr>
<tr>
<td>IsFocused</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>IsHitTestVisible</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>IsInitialized</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>IsKeyboardFocusWithin</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Control_IsLoaded">IsLoaded</a></td>
<td>Gets a value indicating whether the control is fully constructed in the visual tree and both layout and render are complete.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td>IsMeasureValid</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>IsPointerOver</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>IsTabStop</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>IsVisible</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td>Item</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>Item</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>KeyBindings</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TopLevel_Launcher">Launcher</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td>LogicalChildren</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>Margin</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>MaxHeight</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>MaxWidth</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>MinHeight</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>MinWidth</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>Name</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Window_OffScreenMargin">OffScreenMargin</a></td>
<td>Gets the window margin that is hidden off the screen area. This is generally only the case on Windows when in Maximized where the window border is hidden off the screen. This Margin may be used to ensure user content doesnt overlap this space.</td>
</tr>
<tr>
<td>Opacity</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td>OpacityMask</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Window_OwnedWindows">OwnedWindows</a></td>
<td>Gets a collection of child windows owned by this window.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_WindowBase_Owner">Owner</a></td>
<td>Gets or sets the owner of the window.<br />(Inherited from <a href="T_Avalonia_Controls_WindowBase">WindowBase</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_Padding">Padding</a></td>
<td>Gets or sets the padding placed between the border of the control and its content.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td>Parent</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Window_PlatformImpl">PlatformImpl</a></td>
<td>Gets the platform-specific window implementation.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TopLevel_PlatformSettings">PlatformSettings</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Window_Position">Position</a></td>
<td>Gets or sets the window position in screen coordinates.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_ContentControl_Presenter">Presenter</a></td>
<td>Gets the presenter from the control's template.<br />(Inherited from <a href="T_Avalonia_Controls_ContentControl">ContentControl</a>)</td>
</tr>
<tr>
<td>PseudoClasses</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TopLevel_RendererDiagnostics">RendererDiagnostics</a></td>
<td>Gets a value indicating whether the renderer should draw specific diagnostics.<br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TopLevel_RenderScaling">RenderScaling</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td>RenderTransform</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td>RenderTransformOrigin</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TopLevel_RequestedThemeVariant">RequestedThemeVariant</a></td>
<td>Gets or sets the UI theme variant that is used by the control (and its child elements) for resource determination. The UI theme you specify with ThemeVariant can override the app-level ThemeVariant.<br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td>Resources</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_WindowBase_Screens">Screens</a></td>
<td>Gets platform screens implementation.<br />(Inherited from <a href="T_Avalonia_Controls_WindowBase">WindowBase</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Window_ShowActivated">ShowActivated</a></td>
<td>Gets or sets a value that indicates whether a window is activated when first shown.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Window_ShowInTaskbar">ShowInTaskbar</a></td>
<td>Enables or disables the taskbar icon</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Window_SizeToContent">SizeToContent</a></td>
<td>Gets or sets a value indicating how the window will size itself to fit its content.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TopLevel_StorageProvider">StorageProvider</a></td>
<td>File System storage service used for file pickers and bookmarks.<br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td>StyleKey</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Window_StyleKeyOverride">StyleKeyOverride</a></td>
<td><br />(Overrides StyledElement.StyleKeyOverride)</td>
</tr>
<tr>
<td>Styles</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Window_SystemDecorations">SystemDecorations</a></td>
<td>Sets the system decorations (title bar, border, etc)</td>
</tr>
<tr>
<td>TabIndex</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Control_Tag">Tag</a></td>
<td>Gets or sets a user-defined object attached to the control.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_Template">Template</a></td>
<td>Gets or sets the template that defines the control's appearance.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td>TemplatedParent</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>Theme</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Window_Title">Title</a></td>
<td>Gets or sets the title of the window.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_WindowBase_Topmost">Topmost</a></td>
<td>Gets or sets whether this window appears on top of all other windows<br />(Inherited from <a href="T_Avalonia_Controls_WindowBase">WindowBase</a>)</td>
</tr>
<tr>
<td>Transitions</td>
<td><br />(Inherited from Animatable)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TopLevel_TransparencyBackgroundFallback">TransparencyBackgroundFallback</a></td>
<td>Gets or sets the IBrush that transparency will blend with when transparency is not supported. By default this is a solid white brush.<br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TopLevel_TransparencyLevelHint">TransparencyLevelHint</a></td>
<td>Gets or sets the <a href="T_Avalonia_Controls_WindowTransparencyLevel">WindowTransparencyLevel</a> that the TopLevel should use when possible. Accepts multiple values which are applied in a fallback order. For instance, with "Mica, Blur" Mica will be applied only on platforms where it is possible, and Blur will be used on the rest of them. Default value is an empty array or "None".<br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td>UseLayoutRounding</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>VerticalAlignment</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_ContentControl_VerticalContentAlignment">VerticalContentAlignment</a></td>
<td>Gets or sets the vertical alignment of the content within the control.<br />(Inherited from <a href="T_Avalonia_Controls_ContentControl">ContentControl</a>)</td>
</tr>
<tr>
<td>VisualChildren</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td>VisualRoot</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td>Width</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Window_WindowDecorationMargin">WindowDecorationMargin</a></td>
<td>Gets the WindowDecorationMargin. This tells you the thickness around the window that is used by borders and the titlebar.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Window_WindowStartupLocation">WindowStartupLocation</a></td>
<td>Gets or sets the startup location of the window.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Window_WindowState">WindowState</a></td>
<td>Gets or sets the minimized/maximized state of the window.</td>
</tr>
<tr>
<td>ZIndex</td>
<td><br />(Inherited from Visual)</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_WindowBase_Activate">Activate</a></td>
<td>Activates the window.<br />(Inherited from <a href="T_Avalonia_Controls_WindowBase">WindowBase</a>)</td>
</tr>
<tr>
<td>AddHandler(RoutedEvent, Delegate, RoutingStrategies, Boolean)</td>
<td><br />(Inherited from Interactive)</td>
</tr>
<tr>
<td>AddHandler``1(RoutedEvent(UMP), EventHandler(UMP), RoutingStrategies, Boolean)</td>
<td><br />(Inherited from Interactive)</td>
</tr>
<tr>
<td>ApplyStyling</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_TemplatedControl_ApplyTemplate">ApplyTemplate</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td>Arrange</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_WindowBase_ArrangeCore">ArrangeCore</a></td>
<td>Overrides the core arrange logic for windows.<br />(Inherited from <a href="T_Avalonia_Controls_WindowBase">WindowBase</a>)</td>
</tr>
<tr>
<td>ArrangeOverride</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Window_ArrangeSetBounds">ArrangeSetBounds</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_WindowBase_ArrangeSetBounds">WindowBase.ArrangeSetBounds(Size)</a>)</td>
</tr>
<tr>
<td>BeginInit</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Window_BeginMoveDrag">BeginMoveDrag</a></td>
<td>Starts moving a window with left button being held. Should be called from left mouse button press event handler</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Window_BeginResizeDrag">BeginResizeDrag</a></td>
<td>Starts resizing a window. This function is used if an application has window resizing controls. Should be called from left mouse button press event handler</td>
</tr>
<tr>
<td>Bind(AvaloniaProperty, IBinding)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>Bind(AvaloniaProperty, IObservable(Object), BindingPriority)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>Bind``1(DirectPropertyBase(UMP), IObservable(UMP))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>Bind``1(DirectPropertyBase(UMP), IObservable(BindingValue(UMP)))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>Bind``1(DirectPropertyBase(UMP), IObservable(Object))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>Bind``1(StyledProperty(UMP), IObservable(UMP), BindingPriority)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>Bind``1(StyledProperty(UMP), IObservable(BindingValue(UMP)), BindingPriority)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>Bind``1(StyledProperty(UMP), IObservable(Object), BindingPriority)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>BuildEventRoute</td>
<td><br />(Inherited from Interactive)</td>
</tr>
<tr>
<td>CheckAccess</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>ClearValue(AvaloniaProperty)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>ClearValue``1(AvaloniaProperty(UMP))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>ClearValue``1(DirectPropertyBase(UMP))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>ClearValue``1(StyledProperty(UMP))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Window_Close">Close()</a></td>
<td>Closes the window.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Window_Close_1">Close(Object)</a></td>
<td>Closes a dialog window with the specified result.</td>
</tr>
<tr>
<td>CoerceValue</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>EndInit</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_WindowBase_EnsureInitialized">EnsureInitialized</a></td>
<td>Ensures that the window is initialized.<br />(Inherited from <a href="T_Avalonia_Controls_WindowBase">WindowBase</a>)</td>
</tr>
<tr>
<td>Equals</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Window_ExtendClientAreaToDecorationsChanged">ExtendClientAreaToDecorationsChanged</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td>Focus</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>GetBaseValue``1</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>GetHashCode</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_TemplatedControl_GetTemplateFocusTarget">GetTemplateFocusTarget</a></td>
<td>Gets the element that receives the focus adorner.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td>GetValue(AvaloniaProperty)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>GetValue``1(DirectPropertyBase(UMP))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>GetValue``1(StyledProperty(UMP))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Window_Hide">Hide</a></td>
<td>Hides the window but does not close it.<br />(Overrides <a href="M_Avalonia_Controls_WindowBase_Hide">WindowBase.Hide()</a>)</td>
</tr>
<tr>
<td>InitializeIfNeeded</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>InvalidateArrange</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>InvalidateMeasure</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TopLevel_InvalidateMirrorTransform">InvalidateMirrorTransform</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td>InvalidateVisual</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td>IsAnimating</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>IsSet</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Window_IsVisibleChanged">IsVisibleChanged</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_WindowBase_IsVisibleChanged">WindowBase.IsVisibleChanged(AvaloniaPropertyChangedEventArgs)</a>)</td>
</tr>
<tr>
<td>LogicalChildrenCollectionChanged</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td>Measure</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_WindowBase_MeasureCore">MeasureCore</a></td>
<td>Overrides the core measure logic for windows.<br />(Inherited from <a href="T_Avalonia_Controls_WindowBase">WindowBase</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Window_MeasureOverride">MeasureOverride</a></td>
<td><br />(Overrides Layoutable.MeasureOverride(Size))</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TopLevel_OnApplyTemplate">OnApplyTemplate</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_TemplatedControl_OnAttachedToLogicalTree">OnAttachedToLogicalTree</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TopLevel_OnAttachedToVisualTree">OnAttachedToVisualTree</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnAttachedToVisualTreeCore">OnAttachedToVisualTreeCore</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_WindowBase_OnClosed">OnClosed</a></td>
<td>Raises the <a href="E_Avalonia_Controls_TopLevel_Closed">Closed</a> event.<br />(Inherited from <a href="T_Avalonia_Controls_WindowBase">WindowBase</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Window_OnClosing">OnClosing</a></td>
<td>Raises the <a href="E_Avalonia_Controls_Window_Closing">Closing</a> event.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Window_OnCreateAutomationPeer">OnCreateAutomationPeer</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_Control_OnCreateAutomationPeer">Control.OnCreateAutomationPeer()</a>)</td>
</tr>
<tr>
<td>OnDataContextBeginUpdate</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>OnDataContextChanged</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>OnDataContextEndUpdate</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_TemplatedControl_OnDetachedFromLogicalTree">OnDetachedFromLogicalTree</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td>OnDetachedFromVisualTree</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnDetachedFromVisualTreeCore">OnDetachedFromVisualTreeCore</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnGotFocus">OnGotFocus</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td>OnInitialized</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>OnKeyDown</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnKeyUp">OnKeyUp</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnLoaded">OnLoaded</a></td>
<td>Invoked just before the <a href="E_Avalonia_Controls_Control_Loaded">Loaded</a> event.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnLostFocus">OnLostFocus</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td>OnMeasureInvalidated</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_WindowBase_OnOpened">OnOpened</a></td>
<td>Raises the <a href="E_Avalonia_Controls_TopLevel_Opened">Opened</a> event.<br />(Inherited from <a href="T_Avalonia_Controls_WindowBase">WindowBase</a>)</td>
</tr>
<tr>
<td>OnPointerCaptureLost</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>OnPointerEntered</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>OnPointerExited</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>OnPointerMoved</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>OnPointerPressed</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnPointerReleased">OnPointerReleased</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td>OnPointerWheelChanged</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Window_OnPropertyChanged">OnPropertyChanged</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_WindowBase_OnPropertyChanged">WindowBase.OnPropertyChanged(AvaloniaPropertyChangedEventArgs)</a>)</td>
</tr>
<tr>
<td>OnPropertyChangedCore</td>
<td><br />(Inherited from Animatable)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_WindowBase_OnResized">OnResized</a></td>
<td>Raises the <a href="E_Avalonia_Controls_WindowBase_Resized">Resized</a> event.<br />(Inherited from <a href="T_Avalonia_Controls_WindowBase">WindowBase</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnSizeChanged">OnSizeChanged</a></td>
<td>Invoked just before the <a href="E_Avalonia_Controls_Control_SizeChanged">SizeChanged</a> event.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_TemplatedControl_OnTemplateChanged">OnTemplateChanged</a></td>
<td>Called when the <a href="P_Avalonia_Controls_Primitives_TemplatedControl_Template">Template</a> property changes.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td>OnTextInput</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnUnloaded">OnUnloaded</a></td>
<td>Invoked just before the <a href="E_Avalonia_Controls_Control_Unloaded">Unloaded</a> event.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td>OnVisualParentChanged</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>RaiseEvent</td>
<td><br />(Inherited from Interactive)</td>
</tr>
<tr>
<td>RaisePropertyChanged``1</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ContentControl_RegisterContentPresenter">RegisterContentPresenter</a></td>
<td>Called when an <a href="T_Avalonia_Controls_Presenters_ContentPresenter">ContentPresenter</a> is registered with the control.<br />(Inherited from <a href="T_Avalonia_Controls_ContentControl">ContentControl</a>)</td>
</tr>
<tr>
<td>RemoveHandler(RoutedEvent, Delegate)</td>
<td><br />(Inherited from Interactive)</td>
</tr>
<tr>
<td>RemoveHandler``1(RoutedEvent(UMP), EventHandler(UMP))</td>
<td><br />(Inherited from Interactive)</td>
</tr>
<tr>
<td>Render</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TopLevel_RequestAnimationFrame">RequestAnimationFrame</a></td>
<td>Enqueues a callback to be called on the next animation tick<br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TopLevel_RequestPlatformInhibition">RequestPlatformInhibition</a></td>
<td>Requests a <a href="T_Avalonia_Controls_PlatformInhibitionType">PlatformInhibitionType</a> to be inhibited. The behavior remains inhibited until the return value is disposed. The available set of <a href="T_Avalonia_Controls_PlatformInhibitionType">PlatformInhibitionType</a>s depends on the platform. If a behavior is inhibited on a platform where this type is not supported the request will have no effect.<br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td>SetAndRaise``1</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>SetCurrentValue(AvaloniaProperty, Object)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>SetCurrentValue``1(StyledProperty(UMP), UMP)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>SetValue(AvaloniaProperty, Object, BindingPriority)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>SetValue``1(DirectPropertyBase(UMP), UMP)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>SetValue``1(StyledProperty(UMP), UMP, BindingPriority)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Window_Show">Show()</a></td>
<td>Shows the window.<br />(Overrides <a href="M_Avalonia_Controls_WindowBase_Show">WindowBase.Show()</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Window_Show_1">Show(Window)</a></td>
<td>Shows the window as a child of <em>owner</em>.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Window_ShowDialog">ShowDialog(Window)</a></td>
<td>Shows the window as a dialog.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Window_ShowDialog__1">ShowDialog(TResult)(Window)</a></td>
<td>Shows the window as a dialog.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Window_SortWindowsByZOrder">SortWindowsByZOrder</a></td>
<td>Sorts the windows ascending by their Z order - the topmost window will be the last in the list.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TopLevel_StartRendering">StartRendering</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TopLevel_StopRendering">StopRendering</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TopLevel_TryGetPlatformHandle">TryGetPlatformHandle</a></td>
<td>Trys to get the platform handle for the TopLevel-derived control.<br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td>TryGetResource</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>UpdateDataValidation</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>UpdateIsEffectivelyEnabled</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>UpdateLayout</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>VerifyAccess</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Controls_WindowBase_Activated">Activated</a></td>
<td>Fired when the window is activated.<br />(Inherited from <a href="T_Avalonia_Controls_WindowBase">WindowBase</a>)</td>
</tr>
<tr>
<td>ActualThemeVariantChanged</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>AttachedToLogicalTree</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>AttachedToVisualTree</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_TopLevel_BackRequested">BackRequested</a></td>
<td>Occurs when physical Back Button is pressed or a back navigation has been requested.<br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_TopLevel_Closed">Closed</a></td>
<td>Fired when the window is closed.<br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_Window_Closing">Closing</a></td>
<td>Fired before a window is closed.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_Control_ContextRequested">ContextRequested</a></td>
<td>Occurs when the user has completed a context input gesture, such as a right-click.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td>DataContextChanged</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_WindowBase_Deactivated">Deactivated</a></td>
<td>Fired when the window is deactivated.<br />(Inherited from <a href="T_Avalonia_Controls_WindowBase">WindowBase</a>)</td>
</tr>
<tr>
<td>DetachedFromLogicalTree</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>DetachedFromVisualTree</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td>DoubleTapped</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>EffectiveViewportChanged</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>GotFocus</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>Holding</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>Initialized</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>KeyDown</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>KeyUp</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>LayoutUpdated</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_Control_Loaded">Loaded</a></td>
<td>Occurs when the control has been fully constructed in the visual tree and both layout and render are complete.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td>LostFocus</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_TopLevel_Opened">Opened</a></td>
<td>Fired when the window is opened.<br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td>PointerCaptureLost</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>PointerEntered</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>PointerExited</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>PointerMoved</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>PointerPressed</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>PointerReleased</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>PointerWheelChanged</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_WindowBase_PositionChanged">PositionChanged</a></td>
<td>Fired when the window position is changed.<br />(Inherited from <a href="T_Avalonia_Controls_WindowBase">WindowBase</a>)</td>
</tr>
<tr>
<td>PropertyChanged</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_WindowBase_Resized">Resized</a></td>
<td>Occurs when the window is resized.<br />(Inherited from <a href="T_Avalonia_Controls_WindowBase">WindowBase</a>)</td>
</tr>
<tr>
<td>ResourcesChanged</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_TopLevel_ScalingChanged">ScalingChanged</a></td>
<td>Gets or sets a method called when the TopLevel's scaling changes.<br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_Control_SizeChanged">SizeChanged</a></td>
<td>Occurs when the bounds (actual size) of the control have changed.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td>Tapped</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_Primitives_TemplatedControl_TemplateApplied">TemplateApplied</a></td>
<td>Raised when the control's template is applied.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td>TextInput</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>TextInputMethodClientRequested</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_Control_Unloaded">Unloaded</a></td>
<td>Occurs when the control is removed from the visual tree.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Avalonia_Controls_Window_CanResizeProperty">CanResizeProperty</a></td>
<td> </td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Window_ClosingBehaviorProperty">ClosingBehaviorProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_Window_ClosingBehavior">ClosingBehavior</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Window_ExtendClientAreaChromeHintsProperty">ExtendClientAreaChromeHintsProperty</a></td>
<td> </td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Window_ExtendClientAreaTitleBarHeightHintProperty">ExtendClientAreaTitleBarHeightHintProperty</a></td>
<td> </td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Window_ExtendClientAreaToDecorationsHintProperty">ExtendClientAreaToDecorationsHintProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_Window_ExtendClientAreaToDecorationsHint">ExtendClientAreaToDecorationsHint</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Window_IconProperty">IconProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_Window_Icon">Icon</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Window_IsExtendedIntoWindowDecorationsProperty">IsExtendedIntoWindowDecorationsProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_Window_IsExtendedIntoWindowDecorations">IsExtendedIntoWindowDecorations</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Window_OffScreenMarginProperty">OffScreenMarginProperty</a></td>
<td> </td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Window_ShowActivatedProperty">ShowActivatedProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_Window_ShowActivated">ShowActivated</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Window_ShowInTaskbarProperty">ShowInTaskbarProperty</a></td>
<td>Enables or disables the taskbar icon</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Window_SizeToContentProperty">SizeToContentProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_Window_SizeToContent">SizeToContent</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Window_SystemDecorationsProperty">SystemDecorationsProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_Window_SystemDecorations">SystemDecorations</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Window_TitleProperty">TitleProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_Window_Title">Title</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Window_WindowClosedEvent">WindowClosedEvent</a></td>
<td>Routed event that can be used for global tracking of window destruction</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Window_WindowDecorationMarginProperty">WindowDecorationMarginProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_Window_WindowDecorationMargin">WindowDecorationMargin</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Window_WindowOpenedEvent">WindowOpenedEvent</a></td>
<td>Routed event that can be used for global tracking of opening windows</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Window_WindowStartupLocationProperty">WindowStartupLocationProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_Window_WindowStartupLocation">WindowStartupLocation</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Window_WindowStateProperty">WindowStateProperty</a></td>
<td>Represents the current window state (normal, minimized, maximized)</td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_ControlExtensions_BringIntoView_1">BringIntoView</a></td>
<td>Tries to bring the control into view.<br />(Defined by <a href="T_Avalonia_Controls_ControlExtensions">ControlExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ControlExtensions_BringIntoView">BringIntoView</a></td>
<td>Tries to bring the control into view.<br />(Defined by <a href="T_Avalonia_Controls_ControlExtensions">ControlExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ControlExtensions_FindControl__1">FindControl(T)</a></td>
<td>Finds the named control in the scope of the specified control.<br />(Defined by <a href="T_Avalonia_Controls_ControlExtensions">ControlExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Templates_DataTemplateExtensions_FindDataTemplate">FindDataTemplate</a></td>
<td>Find a data template that matches a piece of data.<br />(Defined by <a href="T_Avalonia_Controls_Templates_DataTemplateExtensions">DataTemplateExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ControlExtensions_GetControl__1">GetControl(T)</a></td>
<td>Finds the named control in the scope of the specified control and throws if not found.<br />(Defined by <a href="T_Avalonia_Controls_ControlExtensions">ControlExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Templates_TemplateExtensions_GetTemplateChildren">GetTemplateChildren</a></td>
<td><br />(Defined by <a href="T_Avalonia_Controls_Templates_TemplateExtensions">TemplateExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
