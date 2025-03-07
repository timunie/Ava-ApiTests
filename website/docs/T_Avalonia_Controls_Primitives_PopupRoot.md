# PopupRoot Class


The root window of a <a href="T_Avalonia_Controls_Primitives_Popup">Popup</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public sealed class PopupRoot : WindowBase, 
	IHostedVisualTreeRoot, IDisposable, IStyleHost, IPopupHost, IFocusScope
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public NotInheritable Class PopupRoot
	Inherits WindowBase
	Implements IHostedVisualTreeRoot, IDisposable, IStyleHost, IPopupHost, 
	IFocusScope
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type PopupRoot = 
    class
        inherit WindowBase
        interface IHostedVisualTreeRoot
        interface IDisposable
        interface IStyleHost
        interface IPopupHost
        interface IFocusScope
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Primitives/PopupRoot.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>  →  <a href="T_Avalonia_Animation_Animatable">Animatable</a>  →  <a href="T_Avalonia_StyledElement">StyledElement</a>  →  <a href="T_Avalonia_Visual">Visual</a>  →  <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>  →  <a href="T_Avalonia_Interactivity_Interactive">Interactive</a>  →  <a href="T_Avalonia_Input_InputElement">InputElement</a>  →  <a href="T_Avalonia_Controls_Control">Control</a>  →  <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>  →  <a href="T_Avalonia_Controls_ContentControl">ContentControl</a>  →  <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>  →  <a href="T_Avalonia_Controls_WindowBase">WindowBase</a>  →  PopupRoot</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Controls_Primitives_IPopupHost">IPopupHost</a>, <a href="T_Avalonia_Input_IFocusScope">IFocusScope</a>, <a href="T_Avalonia_Styling_IStyleHost">IStyleHost</a>, <a href="T_Avalonia_VisualTree_IHostedVisualTreeRoot">IHostedVisualTreeRoot</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_PopupRoot__ctor_1">PopupRoot(TopLevel, IPopupImpl)</a></td>
<td>Initializes a new instance of the PopupRoot class.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_PopupRoot__ctor">PopupRoot(TopLevel, IPopupImpl, IAvaloniaDependencyResolver)</a></td>
<td>Initializes a new instance of the PopupRoot class.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_StyledElement_ActualThemeVariant">ActualThemeVariant</a></td>
<td>Gets the UI theme that is currently used by the element, which might be different than the RequestedThemeVariantProperty.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
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
<td><a href="P_Avalonia_Visual_Bounds">Bounds</a></td>
<td>Gets the bounds of the control relative to its parent.<br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_StyledElement_Classes">Classes</a></td>
<td>Gets or sets the styled element's classes.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TopLevel_ClientSize">ClientSize</a></td>
<td>Gets or sets the client size of the window.<br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Visual_Clip">Clip</a></td>
<td>Gets or sets the geometry clip for this visual.<br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TopLevel_Clipboard">Clipboard</a></td>
<td>Gets the platform's clipboard implementation<br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Visual_ClipToBounds">ClipToBounds</a></td>
<td>Gets or sets a value indicating whether the control should be clipped to its bounds.<br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td>
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
<td><a href="P_Avalonia_Input_InputElement_Cursor">Cursor</a></td>
<td>Gets or sets associated mouse cursor.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_StyledElement_DataContext">DataContext</a></td>
<td>Gets or sets the control's data context.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Control_DataTemplates">DataTemplates</a></td>
<td>Gets or sets the data templates for the control.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Layout_Layoutable_DesiredSize">DesiredSize</a></td>
<td>Gets the size that this element computed during the measure pass of the layout process.<br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_WindowBase_DesktopScaling">DesktopScaling</a></td>
<td>Gets the scaling factor for Window positioning and sizing.<br />(Inherited from <a href="T_Avalonia_Controls_WindowBase">WindowBase</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Visual_Effect">Effect</a></td>
<td>Gets or sets the effect of the control.<br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Visual_FlowDirection">FlowDirection</a></td>
<td>Gets or sets the text flow direction.<br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_InputElement_Focusable">Focusable</a></td>
<td>Gets or sets a value indicating whether the control can receive focus.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Control_FocusAdorner">FocusAdorner</a></td>
<td>Gets or sets the control's focus adorner.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TopLevel_FocusManager">FocusManager</a></td>
<td>Gets focus manager of the root.<br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
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
<td><a href="P_Avalonia_Input_InputElement_GestureRecognizers">GestureRecognizers</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Visual_HasMirrorTransform">HasMirrorTransform</a></td>
<td>Gets or sets a value indicating whether to apply mirror transform on this control.<br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Layout_Layoutable_Height">Height</a></td>
<td>Gets or sets the height of the element.<br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Layout_Layoutable_HorizontalAlignment">HorizontalAlignment</a></td>
<td>Gets or sets the element's preferred horizontal alignment in its parent.<br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_ContentControl_HorizontalContentAlignment">HorizontalContentAlignment</a></td>
<td>Gets or sets the horizontal alignment of the content within the control.<br />(Inherited from <a href="T_Avalonia_Controls_ContentControl">ContentControl</a>)</td>
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
<td><a href="P_Avalonia_Layout_Layoutable_IsArrangeValid">IsArrangeValid</a></td>
<td>Gets a value indicating whether the control's layouts arrange is valid.<br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_InputElement_IsEffectivelyEnabled">IsEffectivelyEnabled</a></td>
<td>Gets a value indicating whether this control and all its parents are enabled.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Visual_IsEffectivelyVisible">IsEffectivelyVisible</a></td>
<td>Gets a value indicating whether this control and all its parents are visible.<br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_InputElement_IsEnabled">IsEnabled</a></td>
<td>Gets or sets a value indicating whether the control is enabled for user interaction.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_InputElement_IsFocused">IsFocused</a></td>
<td>Gets a value indicating whether the control is focused.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_InputElement_IsHitTestVisible">IsHitTestVisible</a></td>
<td>Gets or sets a value indicating whether the control is considered for hit testing.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_StyledElement_IsInitialized">IsInitialized</a></td>
<td>Gets a value that indicates whether the element has finished initialization.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_InputElement_IsKeyboardFocusWithin">IsKeyboardFocusWithin</a></td>
<td>Gets a value indicating whether keyboard focus is anywhere within the element or its visual tree child elements.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Control_IsLoaded">IsLoaded</a></td>
<td>Gets a value indicating whether the control is fully constructed in the visual tree and both layout and render are complete.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Layout_Layoutable_IsMeasureValid">IsMeasureValid</a></td>
<td>Gets a value indicating whether the control's layout measure is valid.<br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_InputElement_IsPointerOver">IsPointerOver</a></td>
<td>Gets a value indicating whether the pointer is currently over the control.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_InputElement_IsTabStop">IsTabStop</a></td>
<td>Gets or sets a value that indicates whether the control is included in tab navigation.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Visual_IsVisible">IsVisible</a></td>
<td>Gets or sets a value indicating whether this control is visible.<br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_AvaloniaObject_Item">Item(AvaloniaProperty)</a></td>
<td>Gets or sets the value of a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_AvaloniaObject_Item_1">Item(IndexerDescriptor)</a></td>
<td>Gets or sets a binding for a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_InputElement_KeyBindings">KeyBindings</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TopLevel_Launcher">Launcher</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Layout_Layoutable_Margin">Margin</a></td>
<td>Gets or sets the margin around the element.<br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Layout_Layoutable_MaxHeight">MaxHeight</a></td>
<td>Gets or sets the maximum height of the element.<br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Layout_Layoutable_MaxWidth">MaxWidth</a></td>
<td>Gets or sets the maximum width of the element.<br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Layout_Layoutable_MinHeight">MinHeight</a></td>
<td>Gets or sets the minimum height of the element.<br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Layout_Layoutable_MinWidth">MinWidth</a></td>
<td>Gets or sets the minimum width of the element.<br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_StyledElement_Name">Name</a></td>
<td>Gets or sets the name of the styled element.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Visual_Opacity">Opacity</a></td>
<td>Gets or sets the opacity of the control.<br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Visual_OpacityMask">OpacityMask</a></td>
<td>Gets or sets the opacity mask of the control.<br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td>
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
<td><a href="P_Avalonia_StyledElement_Parent">Parent</a></td>
<td>Gets the styled element's logical parent.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_PopupRoot_ParentTopLevel">ParentTopLevel</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_PopupRoot_PlatformImpl">PlatformImpl</a></td>
<td>Gets the platform-specific window implementation.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TopLevel_PlatformSettings">PlatformSettings</a></td>
<td>Represents a contract for accessing top-level platform-specific settings.<br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_ContentControl_Presenter">Presenter</a></td>
<td>Gets the presenter from the control's template.<br />(Inherited from <a href="T_Avalonia_Controls_ContentControl">ContentControl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TopLevel_RendererDiagnostics">RendererDiagnostics</a></td>
<td>Gets a value indicating whether the renderer should draw specific diagnostics.<br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TopLevel_RenderScaling">RenderScaling</a></td>
<td>The scaling factor to use in rendering.<br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Visual_RenderTransform">RenderTransform</a></td>
<td>Gets or sets the render transform of the control.<br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Visual_RenderTransformOrigin">RenderTransformOrigin</a></td>
<td>Gets or sets the transform origin of the control.<br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TopLevel_RequestedThemeVariant">RequestedThemeVariant</a></td>
<td>Gets or sets the UI theme variant that is used by the control (and its child elements) for resource determination. The UI theme you specify with ThemeVariant can override the app-level ThemeVariant.<br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_StyledElement_Resources">Resources</a></td>
<td>Gets or sets the styled element's resource dictionary.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_WindowBase_Screens">Screens</a></td>
<td>Gets platform screens implementation.<br />(Inherited from <a href="T_Avalonia_Controls_WindowBase">WindowBase</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TopLevel_StorageProvider">StorageProvider</a></td>
<td>File System storage service used for file pickers and bookmarks.<br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_StyledElement_StyleKey">StyleKey</a></td>
<td>Gets the type by which the element is styled.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_StyledElement_Styles">Styles</a></td>
<td>Gets the styles for the styled element.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_InputElement_TabIndex">TabIndex</a></td>
<td>Gets or sets a value that determines the order in which elements receive focus when the user navigates through controls by pressing the Tab key.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
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
<td><a href="P_Avalonia_StyledElement_TemplatedParent">TemplatedParent</a></td>
<td>Gets the styled element whose lookless template this styled element is part of.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_StyledElement_Theme">Theme</a></td>
<td>Gets or sets the theme to be applied to the element.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_WindowBase_Topmost">Topmost</a></td>
<td>Gets or sets whether this window appears on top of all other windows<br />(Inherited from <a href="T_Avalonia_Controls_WindowBase">WindowBase</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_PopupRoot_Transform">Transform</a></td>
<td>Gets or sets a transform that will be applied to the popup.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Animation_Animatable_Transitions">Transitions</a></td>
<td>Gets or sets the property transitions for the control.<br />(Inherited from <a href="T_Avalonia_Animation_Animatable">Animatable</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TopLevel_TransparencyBackgroundFallback">TransparencyBackgroundFallback</a></td>
<td>Gets or sets the <a href="T_Avalonia_Media_IBrush">IBrush</a> that transparency will blend with when transparency is not supported. By default this is a solid white brush.<br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TopLevel_TransparencyLevelHint">TransparencyLevelHint</a></td>
<td>Gets or sets the <a href="T_Avalonia_Controls_WindowTransparencyLevel">WindowTransparencyLevel</a> that the TopLevel should use when possible. Accepts multiple values which are applied in a fallback order. For instance, with "Mica, Blur" Mica will be applied only on platforms where it is possible, and Blur will be used on the rest of them. Default value is an empty array or "None".<br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Layout_Layoutable_UseLayoutRounding">UseLayoutRounding</a></td>
<td>Gets or sets a value that determines whether the element should be snapped to pixel boundaries at layout time.<br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Layout_Layoutable_VerticalAlignment">VerticalAlignment</a></td>
<td>Gets or sets the element's preferred vertical alignment in its parent.<br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_ContentControl_VerticalContentAlignment">VerticalContentAlignment</a></td>
<td>Gets or sets the vertical alignment of the content within the control.<br />(Inherited from <a href="T_Avalonia_Controls_ContentControl">ContentControl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Layout_Layoutable_Width">Width</a></td>
<td>Gets or sets the width of the element.<br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_PopupRoot_WindowManagerAddShadowHint">WindowManagerAddShadowHint</a></td>
<td>Gets or sets a hint to the window manager that a shadow should be added to the popup.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Visual_ZIndex">ZIndex</a></td>
<td>Gets or sets the Z index of the control.<br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_WindowBase_Activate">Activate()</a></td>
<td>Activates the window.<br />(Inherited from <a href="T_Avalonia_Controls_WindowBase">WindowBase</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Interactivity_Interactive_AddHandler">AddHandler(RoutedEvent, Delegate, RoutingStrategies, Boolean)</a></td>
<td>Adds a handler for the specified routed event.<br />(Inherited from <a href="T_Avalonia_Interactivity_Interactive">Interactive</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Interactivity_Interactive_AddHandler__1">AddHandler(TEventArgs)(RoutedEvent(TEventArgs), EventHandler(TEventArgs), RoutingStrategies, Boolean)</a></td>
<td>Adds a handler for the specified routed event.<br />(Inherited from <a href="T_Avalonia_Interactivity_Interactive">Interactive</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_StyledElement_ApplyStyling">ApplyStyling()</a></td>
<td>Applies styling to the control if the control is initialized and styling is not already applied.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_TemplatedControl_ApplyTemplate">ApplyTemplate()</a></td>
<td>Creates the visual children of the control, if necessary<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_Layoutable_Arrange">Arrange(Rect)</a></td>
<td>Arranges the control and its children.<br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_StyledElement_BeginInit">BeginInit()</a></td>
<td>Signals the object that initialization is starting.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Bind">Bind(AvaloniaProperty, IBinding)</a></td>
<td>Binds a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> to an <a href="T_Avalonia_Data_IBinding">IBinding</a>.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Bind_1">Bind(AvaloniaProperty, IObservable(Object), BindingPriority)</a></td>
<td>Binds a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> to an observable.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Bind__1_2">Bind(T)(DirectPropertyBase(T), IObservable(T))</a></td>
<td>Binds a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> to an observable.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Bind__1">Bind(T)(DirectPropertyBase(T), IObservable(BindingValue(T)))</a></td>
<td>Binds a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> to an observable.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Bind__1_1">Bind(T)(DirectPropertyBase(T), IObservable(Object))</a></td>
<td>Binds a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> to an observable.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Bind__1_5">Bind(T)(StyledProperty(T), IObservable(T), BindingPriority)</a></td>
<td>Binds a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> to an observable.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Bind__1_3">Bind(T)(StyledProperty(T), IObservable(BindingValue(T)), BindingPriority)</a></td>
<td>Binds a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> to an observable.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Bind__1_4">Bind(T)(StyledProperty(T), IObservable(Object), BindingPriority)</a></td>
<td>Binds a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> to an observable.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_CheckAccess">CheckAccess()</a></td>
<td>Returns a value indicating whether the current thread is the UI thread.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_ClearValue">ClearValue(AvaloniaProperty)</a></td>
<td>Clears a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>'s local value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_ClearValue__1">ClearValue(T)(AvaloniaProperty(T))</a></td>
<td>Clears a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>'s local value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_ClearValue__1_1">ClearValue(T)(DirectPropertyBase(T))</a></td>
<td>Clears a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>'s local value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_ClearValue__1_2">ClearValue(T)(StyledProperty(T))</a></td>
<td>Clears a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>'s local value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_CoerceValue">CoerceValue(AvaloniaProperty)</a></td>
<td>Coerces the specified <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_PopupRoot_ConfigurePosition">ConfigurePosition(Visual, PlacementMode, Point, PopupAnchor, PopupGravity, PopupPositionerConstraintAdjustment, Nullable(Rect))</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_PopupRoot_Dispose">Dispose()</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.</td>
</tr>
<tr>
<td><a href="M_Avalonia_StyledElement_EndInit">EndInit()</a></td>
<td>Signals the object that initialization is complete.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Equals">Equals(Object)</a></td>
<td>Compares two objects using reference equality.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_InputElement_Focus">Focus(NavigationMethod, KeyModifiers)</a></td>
<td>Focuses the control.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_GetBaseValue__1">GetBaseValue(T)(StyledProperty(T))</a></td>
<td>Gets an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> base value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_GetHashCode">GetHashCode()</a></td>
<td>Gets the hash code for the object.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_GetValue">GetValue(AvaloniaProperty)</a></td>
<td>Gets a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_GetValue__1">GetValue(T)(DirectPropertyBase(T))</a></td>
<td>Gets a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_GetValue__1_1">GetValue(T)(StyledProperty(T))</a></td>
<td>Gets a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_WindowBase_Hide">Hide()</a></td>
<td>Hides the popup.<br />(Inherited from <a href="T_Avalonia_Controls_WindowBase">WindowBase</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_Layoutable_InvalidateArrange">InvalidateArrange()</a></td>
<td>Invalidates the arrangement of the control and queues a new layout pass.<br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_Layoutable_InvalidateMeasure">InvalidateMeasure()</a></td>
<td>Invalidates the measurement of the control and queues a new layout pass.<br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Visual_InvalidateVisual">InvalidateVisual()</a></td>
<td>Invalidates the visual and queues a repaint.<br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_IsAnimating">IsAnimating(AvaloniaProperty)</a></td>
<td>Checks whether a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> is animating.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_IsSet">IsSet(AvaloniaProperty)</a></td>
<td>Checks whether a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> is set on this object.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_Layoutable_Measure">Measure(Size)</a></td>
<td>Carries out a measure of the control.<br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Interactivity_Interactive_RaiseEvent">RaiseEvent(RoutedEventArgs)</a></td>
<td>Raises a routed event.<br />(Inherited from <a href="T_Avalonia_Interactivity_Interactive">Interactive</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Interactivity_Interactive_RemoveHandler">RemoveHandler(RoutedEvent, Delegate)</a></td>
<td>Removes a handler for the specified routed event.<br />(Inherited from <a href="T_Avalonia_Interactivity_Interactive">Interactive</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Interactivity_Interactive_RemoveHandler__1">RemoveHandler(TEventArgs)(RoutedEvent(TEventArgs), EventHandler(TEventArgs))</a></td>
<td>Removes a handler for the specified routed event.<br />(Inherited from <a href="T_Avalonia_Interactivity_Interactive">Interactive</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Visual_Render">Render(DrawingContext)</a></td>
<td>Renders the visual to a <a href="T_Avalonia_Media_DrawingContext">DrawingContext</a>.<br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TopLevel_RequestAnimationFrame">RequestAnimationFrame(Action(TimeSpan))</a></td>
<td>Enqueues a callback to be called on the next animation tick<br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TopLevel_RequestPlatformInhibition">RequestPlatformInhibition(PlatformInhibitionType, String)</a></td>
<td>Requests a <a href="T_Avalonia_Controls_PlatformInhibitionType">PlatformInhibitionType</a> to be inhibited. The behavior remains inhibited until the return value is disposed. The available set of <a href="T_Avalonia_Controls_PlatformInhibitionType">PlatformInhibitionType</a>s depends on the platform. If a behavior is inhibited on a platform where this type is not supported the request will have no effect.<br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_PopupRoot_SetChild">SetChild(Control)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_SetCurrentValue">SetCurrentValue(AvaloniaProperty, Object)</a></td>
<td>Sets the value of a dependency property without changing its value source.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_SetCurrentValue__1">SetCurrentValue(T)(StyledProperty(T), T)</a></td>
<td>Sets the value of a dependency property without changing its value source.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_SetValue">SetValue(AvaloniaProperty, Object, BindingPriority)</a></td>
<td>Sets a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_SetValue__1">SetValue(T)(DirectPropertyBase(T), T)</a></td>
<td>Sets a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_SetValue__1_1">SetValue(T)(StyledProperty(T), T, BindingPriority)</a></td>
<td>Sets a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_WindowBase_Show">Show()</a></td>
<td>Shows the window.<br />(Inherited from <a href="T_Avalonia_Controls_WindowBase">WindowBase</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_PopupRoot_TakeFocus">TakeFocus()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TopLevel_TryGetPlatformHandle">TryGetPlatformHandle()</a></td>
<td>Trys to get the platform handle for the TopLevel-derived control.<br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_StyledElement_TryGetResource">TryGetResource(Object, ThemeVariant, Object)</a></td>
<td>Tries to find a resource within the object.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_Layoutable_UpdateLayout">UpdateLayout()</a></td>
<td>Executes a layout pass.<br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_VerifyAccess">VerifyAccess()</a></td>
<td>Checks that the current thread is the UI thread and throws if not.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Controls_WindowBase_Activated">Activated</a></td>
<td>Fired when the window is activated.<br />(Inherited from <a href="T_Avalonia_Controls_WindowBase">WindowBase</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_StyledElement_ActualThemeVariantChanged">ActualThemeVariantChanged</a></td>
<td>Raised when the theme variant is changed on the element or an ancestor of the element.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_StyledElement_AttachedToLogicalTree">AttachedToLogicalTree</a></td>
<td>Raised when the styled element is attached to a rooted logical tree.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Visual_AttachedToVisualTree">AttachedToVisualTree</a></td>
<td>Raised when the control is attached to a rooted visual tree.<br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td>
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
<td><a href="E_Avalonia_Controls_Control_ContextRequested">ContextRequested</a></td>
<td>Occurs when the user has completed a context input gesture, such as a right-click.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_StyledElement_DataContextChanged">DataContextChanged</a></td>
<td>Occurs when the <a href="P_Avalonia_StyledElement_DataContext">DataContext</a> property changes.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_WindowBase_Deactivated">Deactivated</a></td>
<td>Fired when the window is deactivated.<br />(Inherited from <a href="T_Avalonia_Controls_WindowBase">WindowBase</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_StyledElement_DetachedFromLogicalTree">DetachedFromLogicalTree</a></td>
<td>Raised when the styled element is detached from a rooted logical tree.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Visual_DetachedFromVisualTree">DetachedFromVisualTree</a></td>
<td>Raised when the control is detached from a rooted visual tree.<br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_DoubleTapped">DoubleTapped</a></td>
<td>Occurs when a double-tap gesture occurs on the control.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Layout_Layoutable_EffectiveViewportChanged">EffectiveViewportChanged</a></td>
<td>Occurs when the element's effective viewport changes.<br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_GotFocus">GotFocus</a></td>
<td>Occurs when the control receives focus.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_Holding">Holding</a></td>
<td>Occurs when a hold gesture occurs on the control.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_StyledElement_Initialized">Initialized</a></td>
<td>Occurs when the styled element has finished initialization.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_KeyDown">KeyDown</a></td>
<td>Occurs when a key is pressed while the control has focus.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_KeyUp">KeyUp</a></td>
<td>Occurs when a key is released while the control has focus.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Layout_Layoutable_LayoutUpdated">LayoutUpdated</a></td>
<td>Occurs when a layout pass completes for the control.<br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_Control_Loaded">Loaded</a></td>
<td>Occurs when the control has been fully constructed in the visual tree and both layout and render are complete.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_LostFocus">LostFocus</a></td>
<td>Occurs when the control loses focus.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_TopLevel_Opened">Opened</a></td>
<td>Fired when the window is opened.<br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_PointerCaptureLost">PointerCaptureLost</a></td>
<td>Occurs when the control or its child control loses the pointer capture for any reason, event will not be triggered for a parent control if capture was transferred to another child of that parent control<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_PointerEntered">PointerEntered</a></td>
<td>Occurs when the pointer enters the control.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_PointerExited">PointerExited</a></td>
<td>Occurs when the pointer leaves the control.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_PointerMoved">PointerMoved</a></td>
<td>Occurs when the pointer moves over the control.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_PointerPressed">PointerPressed</a></td>
<td>Occurs when the pointer is pressed over the control.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_PointerReleased">PointerReleased</a></td>
<td>Occurs when the pointer is released over the control.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_PointerWheelChanged">PointerWheelChanged</a></td>
<td>Occurs when the mouse is scrolled over the control.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_WindowBase_PositionChanged">PositionChanged</a></td>
<td>Fired when the window position is changed.<br />(Inherited from <a href="T_Avalonia_Controls_WindowBase">WindowBase</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_AvaloniaObject_PropertyChanged">PropertyChanged</a></td>
<td>Raised when a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> value changes on this object.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_WindowBase_Resized">Resized</a></td>
<td>Occurs when the window is resized.<br />(Inherited from <a href="T_Avalonia_Controls_WindowBase">WindowBase</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_StyledElement_ResourcesChanged">ResourcesChanged</a></td>
<td>Occurs when a resource in this styled element or a parent styled element has changed.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
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
<td><a href="E_Avalonia_Input_InputElement_Tapped">Tapped</a></td>
<td>Occurs when a tap gesture occurs on the control.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_Primitives_TemplatedControl_TemplateApplied">TemplateApplied</a></td>
<td>Raised when the control's template is applied.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_TextInput">TextInput</a></td>
<td>Occurs when a user typed some text while the control has focus.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_TextInputMethodClientRequested">TextInputMethodClientRequested</a></td>
<td>Occurs when an input element gains input focus and input method is looking for the corresponding client<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_Control_Unloaded">Unloaded</a></td>
<td>Occurs when the control is removed from the visual tree.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Avalonia_Controls_Primitives_PopupRoot_TransformProperty">TransformProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_Primitives_PopupRoot_Transform">Transform</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Primitives_PopupRoot_WindowManagerAddShadowHintProperty">WindowManagerAddShadowHintProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_Primitives_PopupRoot_WindowManagerAddShadowHint">WindowManagerAddShadowHint</a> property.</td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Interactivity_InteractiveExtensions_AddDisposableHandler__1">AddDisposableHandler(TEventArgs)(RoutedEvent(TEventArgs), EventHandler(TEventArgs), RoutingStrategies, Boolean)</a></td>
<td>Adds a handler for the specified routed event and returns a disposable that can terminate the event subscription.<br />(Defined by <a href="T_Avalonia_Interactivity_InteractiveExtensions">InteractiveExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_DevToolsExtensions_AttachDevTools_4">AttachDevTools()</a></td>
<td>Attaches DevTools to a window, to be opened with the F12 key.<br />(Defined by <a href="T_Avalonia_DevToolsExtensions">DevToolsExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_DevToolsExtensions_AttachDevTools_2">AttachDevTools(DevToolsOptions)</a></td>
<td>Attaches DevTools to a window, to be opened with the specified options.<br />(Defined by <a href="T_Avalonia_DevToolsExtensions">DevToolsExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_DevToolsExtensions_AttachDevTools_3">AttachDevTools(KeyGesture)</a></td>
<td>Attaches DevTools to a window, to be opened with the specified key gesture.<br />(Defined by <a href="T_Avalonia_DevToolsExtensions">DevToolsExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_Bind">Bind(AvaloniaProperty, IBinding, Object)</a></td>
<td>Binds a property on an <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a> to an <a href="T_Avalonia_Data_IBinding">IBinding</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_Bind__1">Bind(T)(AvaloniaProperty(T), IObservable(BindingValue(T)), BindingPriority)</a></td>
<td>Binds an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> to an observable.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_Bind__1_1">Bind(T)(AvaloniaProperty(T), IObservable(T), BindingPriority)</a></td>
<td>Binds an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> to an observable.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_StyledElementExtensions_BindClass">BindClass(String, IBinding, Object)</a></td>
<td><br />(Defined by <a href="T_Avalonia_StyledElementExtensions">StyledElementExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ControlExtensions_BringIntoView_1">BringIntoView()</a></td>
<td>Tries to bring the control into view.<br />(Defined by <a href="T_Avalonia_Controls_ControlExtensions">ControlExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ControlExtensions_BringIntoView">BringIntoView(Rect)</a></td>
<td>Tries to bring the control into view.<br />(Defined by <a href="T_Avalonia_Controls_ControlExtensions">ControlExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_CalculateDistanceFromAncestor">CalculateDistanceFromAncestor(Visual)</a></td>
<td>Calculates the distance from a visual's ancestor.<br />(Defined by <a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_FindAncestorOfType__1">FindAncestorOfType(T)(Boolean)</a></td>
<td>Finds first ancestor of given type.<br />(Defined by <a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_FindCommonVisualAncestor">FindCommonVisualAncestor(Visual)</a></td>
<td>Tries to get the first common ancestor of two visuals.<br />(Defined by <a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ControlExtensions_FindControl__1">FindControl(T)(String)</a></td>
<td>Finds the named control in the scope of the specified control.<br />(Defined by <a href="T_Avalonia_Controls_ControlExtensions">ControlExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Templates_DataTemplateExtensions_FindDataTemplate">FindDataTemplate(Object, IDataTemplate)</a></td>
<td>Find a data template that matches a piece of data.<br />(Defined by <a href="T_Avalonia_Controls_Templates_DataTemplateExtensions">DataTemplateExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_FindDescendantOfType__1">FindDescendantOfType(T)(Boolean)</a></td>
<td>Finds first descendant of given type.<br />(Defined by <a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetBaseValue">GetBaseValue(AvaloniaProperty)</a></td>
<td>Gets an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> base value.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetBaseValue__1">GetBaseValue(T)(AvaloniaProperty(T))</a></td>
<td>Gets an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> base value.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetBindingObservable">GetBindingObservable(AvaloniaProperty)</a></td>
<td>Gets an observable for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetBindingObservable__1_1">GetBindingObservable(T)(AvaloniaProperty(T))</a></td>
<td>Gets an observable for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetBindingObservable__1">GetBindingObservable(TResult)(AvaloniaProperty, Func(Object, TResult))</a></td>
<td>Gets an observable for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetBindingObservable__2">GetBindingObservable(TSource, TResult)(AvaloniaProperty(TSource), Func(TSource, TResult))</a></td>
<td>Gets an observable for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_ReactiveUI_AvaloniaObjectReactiveExtensions_GetBindingSubject">GetBindingSubject(AvaloniaProperty, BindingPriority)</a></td>
<td>Gets a subject for a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_ReactiveUI_AvaloniaObjectReactiveExtensions">AvaloniaObjectReactiveExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_ReactiveUI_AvaloniaObjectReactiveExtensions_GetBindingSubject__1">GetBindingSubject(T)(AvaloniaProperty(T), BindingPriority)</a></td>
<td>Gets a subject for a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_ReactiveUI_AvaloniaObjectReactiveExtensions">AvaloniaObjectReactiveExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ControlExtensions_GetControl__1">GetControl(T)(String)</a></td>
<td>Finds the named control in the scope of the specified control and throws if not found.<br />(Defined by <a href="T_Avalonia_Controls_ControlExtensions">ControlExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Diagnostics_AvaloniaObjectExtensions_GetDiagnostic">GetDiagnostic(AvaloniaProperty)</a></td>
<td>Gets a diagnostic for a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> on a <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>.<br />(Defined by <a href="T_Avalonia_Diagnostics_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Interactivity_InteractiveExtensions_GetInteractiveParent">GetInteractiveParent()</a></td>
<td><br />(Defined by <a href="T_Avalonia_Interactivity_InteractiveExtensions">InteractiveExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetObservable">GetObservable(AvaloniaProperty)</a></td>
<td>Gets an observable for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetObservable__1_1">GetObservable(T)(AvaloniaProperty(T))</a></td>
<td>Gets an observable for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetObservable__1">GetObservable(TResult)(AvaloniaProperty, Func(Object, TResult))</a></td>
<td>Gets an observable for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Interactivity_InteractiveExtensions_GetObservable__1">GetObservable(TEventArgs)(RoutedEvent(TEventArgs), RoutingStrategies, Boolean)</a></td>
<td>Gets an observable for a <a href="T_Avalonia_Interactivity_RoutedEvent_1">RoutedEvent(TEventArgs)</a>.<br />(Defined by <a href="T_Avalonia_Interactivity_InteractiveExtensions">InteractiveExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetObservable__2">GetObservable(TSource, TResult)(AvaloniaProperty(TSource), Func(TSource, TResult))</a></td>
<td>Gets an observable for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetPropertyChangedObservable">GetPropertyChangedObservable(AvaloniaProperty)</a></td>
<td>Gets an observable that listens for property changed events for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_GetSelfAndVisualAncestors">GetSelfAndVisualAncestors()</a></td>
<td>Enumerates an <a href="T_Avalonia_Visual">Visual</a> and its ancestors in the visual tree.<br />(Defined by <a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_GetSelfAndVisualDescendants">GetSelfAndVisualDescendants()</a></td>
<td>Enumerates an <a href="T_Avalonia_Visual">Visual</a> and its descendants in the visual tree.<br />(Defined by <a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Diagnostics_StyledElementExtensions_GetStyleDiagnostics">GetStyleDiagnostics()</a></td>
<td><br />(Defined by <a href="T_Avalonia_Diagnostics_StyledElementExtensions">StyledElementExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_ReactiveUI_AvaloniaObjectReactiveExtensions_GetSubject">GetSubject(AvaloniaProperty, BindingPriority)</a></td>
<td>Gets a subject for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_ReactiveUI_AvaloniaObjectReactiveExtensions">AvaloniaObjectReactiveExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_ReactiveUI_AvaloniaObjectReactiveExtensions_GetSubject__1">GetSubject(T)(AvaloniaProperty(T), BindingPriority)</a></td>
<td>Gets a subject for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_ReactiveUI_AvaloniaObjectReactiveExtensions">AvaloniaObjectReactiveExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Templates_TemplateExtensions_GetTemplateChildren">GetTemplateChildren()</a></td>
<td><br />(Defined by <a href="T_Avalonia_Controls_Templates_TemplateExtensions">TemplateExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_GetTransformedBounds">GetTransformedBounds()</a></td>
<td><br />(Defined by <a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetValue__1">GetValue(T)(AvaloniaProperty(T))</a></td>
<td>Gets a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> value.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Diagnostics_AvaloniaObjectExtensions_GetValueStoreDiagnostic">GetValueStoreDiagnostic()</a></td>
<td>Gets a value store diagnostics for a <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>.<br />(Defined by <a href="T_Avalonia_Diagnostics_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_GetVisualAncestors">GetVisualAncestors()</a></td>
<td>Enumerates the ancestors of an <a href="T_Avalonia_Visual">Visual</a> in the visual tree.<br />(Defined by <a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_GetVisualAt_1">GetVisualAt(Point)</a></td>
<td>Gets the first visual in the visual tree whose bounds contain a point.<br />(Defined by <a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_GetVisualAt">GetVisualAt(Point, Func(Visual, Boolean))</a></td>
<td>Gets the first visual in the visual tree whose bounds contain a point.<br />(Defined by <a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_GetVisualChildren">GetVisualChildren()</a></td>
<td>Enumerates the children of an <a href="T_Avalonia_Visual">Visual</a> in the visual tree.<br />(Defined by <a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_GetVisualDescendants">GetVisualDescendants()</a></td>
<td>Enumerates the descendants of an <a href="T_Avalonia_Visual">Visual</a> in the visual tree.<br />(Defined by <a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_GetVisualParent">GetVisualParent()</a></td>
<td>Gets the visual parent of an <a href="T_Avalonia_Visual">Visual</a>.<br />(Defined by <a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_GetVisualParent__1">GetVisualParent(T)()</a></td>
<td>Gets the visual parent of an <a href="T_Avalonia_Visual">Visual</a>.<br />(Defined by <a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_GetVisualRoot">GetVisualRoot()</a></td>
<td>Gets the root visual for an <a href="T_Avalonia_Visual">Visual</a>.<br />(Defined by <a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_GetVisualsAt_1">GetVisualsAt(Point)</a></td>
<td>Enumerates the visible visuals in the visual tree whose bounds contain a point.<br />(Defined by <a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_GetVisualsAt">GetVisualsAt(Point, Func(Visual, Boolean))</a></td>
<td>Enumerates the visuals in the visual tree whose bounds contain a point.<br />(Defined by <a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_IsAttachedToVisualTree">IsAttachedToVisualTree()</a></td>
<td>Returns a value indicating whether this control is attached to a visual root.<br />(Defined by <a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_IsVisualAncestorOf">IsVisualAncestorOf(Visual)</a></td>
<td>Tests whether an <a href="T_Avalonia_Visual">Visual</a> is an ancestor of another visual.<br />(Defined by <a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualExtensions_PointToClient">PointToClient(PixelPoint)</a></td>
<td>Converts a point from screen to client coordinates.<br />(Defined by <a href="T_Avalonia_VisualExtensions">VisualExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualExtensions_PointToScreen">PointToScreen(Point)</a></td>
<td>Converts a point from client to screen coordinates.<br />(Defined by <a href="T_Avalonia_VisualExtensions">VisualExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualExtensions_TransformToVisual">TransformToVisual(Visual)</a></td>
<td>Returns a transform that transforms the visual's coordinates into the coordinates of the specified <em>to</em>.<br />(Defined by <a href="T_Avalonia_VisualExtensions">VisualExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualExtensions_TranslatePoint">TranslatePoint(Point, Visual)</a></td>
<td>Translates a point relative to this visual to coordinates that are relative to the specified visual.<br />(Defined by <a href="T_Avalonia_VisualExtensions">VisualExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  
