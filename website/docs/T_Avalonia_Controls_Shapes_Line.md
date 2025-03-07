# Line Class




## Definition
**Namespace:** <a href="N_Avalonia_Controls_Shapes">Avalonia.Controls.Shapes</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class Line : Shape
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class Line
	Inherits Shape
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type Line = 
    class
        inherit Shape
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Shapes/Line.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>  →  <a href="T_Avalonia_Animation_Animatable">Animatable</a>  →  <a href="T_Avalonia_StyledElement">StyledElement</a>  →  <a href="T_Avalonia_Visual">Visual</a>  →  <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>  →  <a href="T_Avalonia_Interactivity_Interactive">Interactive</a>  →  <a href="T_Avalonia_Input_InputElement">InputElement</a>  →  <a href="T_Avalonia_Controls_Control">Control</a>  →  <a href="T_Avalonia_Controls_Shapes_Shape">Shape</a>  →  Line</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_Shapes_Line__ctor">Line()</a></td>
<td>Initializes a new instance of the Line class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_StyledElement_ActualThemeVariant">ActualThemeVariant</a></td>
<td>Gets the UI theme that is currently used by the element, which might be different than the RequestedThemeVariantProperty.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Visual_Bounds">Bounds</a></td>
<td>Gets the bounds of the control relative to its parent.<br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Visual_BypassFlowDirectionPolicies">BypassFlowDirectionPolicies</a></td>
<td>Gets a value indicating whether control bypass FlowDirecton policies.<br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_StyledElement_Classes">Classes</a></td>
<td>Gets or sets the styled element's classes.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Visual_Clip">Clip</a></td>
<td>Gets or sets the geometry clip for this visual.<br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Visual_ClipToBounds">ClipToBounds</a></td>
<td>Gets or sets a value indicating whether the control should be clipped to its bounds.<br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td>
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
<td><a href="P_Avalonia_Controls_Shapes_Shape_DefiningGeometry">DefiningGeometry</a></td>
<td>Gets a value that represents the <a href="T_Avalonia_Media_Geometry">Geometry</a> of the shape.<br />(Inherited from <a href="T_Avalonia_Controls_Shapes_Shape">Shape</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Layout_Layoutable_DesiredSize">DesiredSize</a></td>
<td>Gets the size that this element computed during the measure pass of the layout process.<br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Visual_Effect">Effect</a></td>
<td>Gets or sets the effect of the control.<br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Shapes_Line_EndPoint">EndPoint</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Shapes_Shape_Fill">Fill</a></td>
<td>Gets or sets the <a href="T_Avalonia_Media_IBrush">IBrush</a> that specifies how the shape's interior is painted.<br />(Inherited from <a href="T_Avalonia_Controls_Shapes_Shape">Shape</a>)</td>
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
<td><a href="P_Avalonia_AvaloniaObject_InheritanceParent">InheritanceParent</a></td>
<td>Gets or sets the parent object that inherited <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> values are inherited from.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
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
<td><a href="P_Avalonia_Input_InputElement_IsEnabledCore">IsEnabledCore</a></td>
<td>Allows a derived class to override the enabled state of the control.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
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
<td><a href="P_Avalonia_StyledElement_LogicalChildren">LogicalChildren</a></td>
<td>Gets the styled element's logical children.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
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
<td><a href="P_Avalonia_StyledElement_Parent">Parent</a></td>
<td>Gets the styled element's logical parent.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_StyledElement_PseudoClasses">PseudoClasses</a></td>
<td>Gets the <a href="P_Avalonia_StyledElement_Classes">Classes</a> collection in a form that allows adding and removing pseudoclasses.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Shapes_Shape_RenderedGeometry">RenderedGeometry</a></td>
<td>Gets a value that represents the final rendered <a href="T_Avalonia_Media_Geometry">Geometry</a> of the shape.<br />(Inherited from <a href="T_Avalonia_Controls_Shapes_Shape">Shape</a>)</td>
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
<td><a href="P_Avalonia_StyledElement_Resources">Resources</a></td>
<td>Gets or sets the styled element's resource dictionary.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Shapes_Line_StartPoint">StartPoint</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Shapes_Shape_Stretch">Stretch</a></td>
<td>Gets or sets a <a href="P_Avalonia_Controls_Shapes_Shape_Stretch">Stretch</a> enumeration value that describes how the shape fills its allocated space.<br />(Inherited from <a href="T_Avalonia_Controls_Shapes_Shape">Shape</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Shapes_Shape_Stroke">Stroke</a></td>
<td>Gets or sets the <a href="T_Avalonia_Media_IBrush">IBrush</a> that specifies how the shape's outline is painted.<br />(Inherited from <a href="T_Avalonia_Controls_Shapes_Shape">Shape</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Shapes_Shape_StrokeDashArray">StrokeDashArray</a></td>
<td>Gets or sets a collection of <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a> values that indicate the pattern of dashes and gaps that is used to outline shapes.<br />(Inherited from <a href="T_Avalonia_Controls_Shapes_Shape">Shape</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Shapes_Shape_StrokeDashOffset">StrokeDashOffset</a></td>
<td>Gets or sets a value that specifies the distance within the dash pattern where a dash begins.<br />(Inherited from <a href="T_Avalonia_Controls_Shapes_Shape">Shape</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Shapes_Shape_StrokeJoin">StrokeJoin</a></td>
<td>Gets or sets a <a href="T_Avalonia_Media_PenLineJoin">PenLineJoin</a> enumeration value that specifies the type of join that is used at the vertices of a Shape.<br />(Inherited from <a href="T_Avalonia_Controls_Shapes_Shape">Shape</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Shapes_Shape_StrokeLineCap">StrokeLineCap</a></td>
<td>Gets or sets a <a href="T_Avalonia_Media_PenLineCap">PenLineCap</a> enumeration value that describes the shape at the ends of a line.<br />(Inherited from <a href="T_Avalonia_Controls_Shapes_Shape">Shape</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Shapes_Shape_StrokeThickness">StrokeThickness</a></td>
<td>Gets or sets the width of the shape outline.<br />(Inherited from <a href="T_Avalonia_Controls_Shapes_Shape">Shape</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_StyledElement_StyleKey">StyleKey</a></td>
<td>Gets the type by which the element is styled.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_StyledElement_StyleKeyOverride">StyleKeyOverride</a></td>
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
<td><a href="P_Avalonia_StyledElement_TemplatedParent">TemplatedParent</a></td>
<td>Gets the styled element whose lookless template this styled element is part of.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_StyledElement_Theme">Theme</a></td>
<td>Gets or sets the theme to be applied to the element.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Animation_Animatable_Transitions">Transitions</a></td>
<td>Gets or sets the property transitions for the control.<br />(Inherited from <a href="T_Avalonia_Animation_Animatable">Animatable</a>)</td>
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
<td><a href="P_Avalonia_Visual_VisualChildren">VisualChildren</a></td>
<td>Gets the control's child visuals.<br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Visual_VisualRoot">VisualRoot</a></td>
<td>Gets the root of the visual tree, if the control is attached to a visual tree.<br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Layout_Layoutable_Width">Width</a></td>
<td>Gets or sets the width of the element.<br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Visual_ZIndex">ZIndex</a></td>
<td>Gets or sets the Z index of the control.<br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td>
</tr>
</table>

## Methods
<table>
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
<td><a href="M_Avalonia_Layout_Layoutable_ApplyTemplate">ApplyTemplate()</a></td>
<td>Creates the visual children of the control, if necessary<br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_Layoutable_Arrange">Arrange(Rect)</a></td>
<td>Arranges the control and its children.<br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_Layoutable_ArrangeCore">ArrangeCore(Rect)</a></td>
<td>The default implementation of the control's arrange pass.<br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Shapes_Shape_ArrangeOverride">ArrangeOverride(Size)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Shapes_Shape">Shape</a>)</td>
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
<td><a href="M_Avalonia_Interactivity_Interactive_BuildEventRoute">BuildEventRoute(RoutedEvent)</a></td>
<td>Builds an event route for a routed event.<br />(Inherited from <a href="T_Avalonia_Interactivity_Interactive">Interactive</a>)</td>
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
<td><a href="M_Avalonia_Controls_Shapes_Line_CreateDefiningGeometry">CreateDefiningGeometry()</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_Shapes_Shape_CreateDefiningGeometry">Shape.CreateDefiningGeometry()</a>)</td>
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
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
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
<td><a href="M_Avalonia_Controls_Control_GetTemplateFocusTarget">GetTemplateFocusTarget()</a></td>
<td>Gets the element that receives the focus adorner.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
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
<td><a href="M_Avalonia_StyledElement_InitializeIfNeeded">InitializeIfNeeded()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_Layoutable_InvalidateArrange">InvalidateArrange()</a></td>
<td>Invalidates the arrangement of the control and queues a new layout pass.<br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Shapes_Shape_InvalidateGeometry">InvalidateGeometry()</a></td>
<td>Invalidates the geometry of this shape.<br />(Inherited from <a href="T_Avalonia_Controls_Shapes_Shape">Shape</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_Layoutable_InvalidateMeasure">InvalidateMeasure()</a></td>
<td>Invalidates the measurement of the control and queues a new layout pass.<br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Visual_InvalidateMirrorTransform">InvalidateMirrorTransform()</a></td>
<td>Computes the <a href="P_Avalonia_Visual_HasMirrorTransform">HasMirrorTransform</a> value according to the <a href="P_Avalonia_Visual_FlowDirection">FlowDirection</a> and <a href="P_Avalonia_Visual_BypassFlowDirectionPolicies">BypassFlowDirectionPolicies</a><br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td>
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
<td><a href="M_Avalonia_Visual_LogicalChildrenCollectionChanged">LogicalChildrenCollectionChanged(Object, NotifyCollectionChangedEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_Layoutable_Measure">Measure(Size)</a></td>
<td>Carries out a measure of the control.<br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_Layoutable_MeasureCore">MeasureCore(Size)</a></td>
<td>The default implementation of the control's measure pass.<br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Shapes_Shape_MeasureOverride">MeasureOverride(Size)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Shapes_Shape">Shape</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_StyledElement_OnAttachedToLogicalTree">OnAttachedToLogicalTree(LogicalTreeAttachmentEventArgs)</a></td>
<td>Called when the styled element is added to a rooted logical tree.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Shapes_Shape_OnAttachedToVisualTree">OnAttachedToVisualTree(VisualTreeAttachmentEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Shapes_Shape">Shape</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnAttachedToVisualTreeCore">OnAttachedToVisualTreeCore(VisualTreeAttachmentEventArgs)</a></td>
<td>Calls the <a href="M_Avalonia_Visual_OnAttachedToVisualTree">OnAttachedToVisualTree(VisualTreeAttachmentEventArgs)</a> method for this control and all of its visual descendants.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnCreateAutomationPeer">OnCreateAutomationPeer()</a></td>
<td>Returns a new, type-specific <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a> implementation for the control.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_StyledElement_OnDataContextBeginUpdate">OnDataContextBeginUpdate()</a></td>
<td>Called when the <a href="P_Avalonia_StyledElement_DataContext">DataContext</a> begins updating.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_StyledElement_OnDataContextChanged">OnDataContextChanged(EventArgs)</a></td>
<td>Called when the <a href="P_Avalonia_StyledElement_DataContext">DataContext</a> property changes.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_StyledElement_OnDataContextEndUpdate">OnDataContextEndUpdate()</a></td>
<td>Called when the <a href="P_Avalonia_StyledElement_DataContext">DataContext</a> finishes updating.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_StyledElement_OnDetachedFromLogicalTree">OnDetachedFromLogicalTree(LogicalTreeAttachmentEventArgs)</a></td>
<td>Called when the styled element is removed from a rooted logical tree.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Shapes_Shape_OnDetachedFromVisualTree">OnDetachedFromVisualTree(VisualTreeAttachmentEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Shapes_Shape">Shape</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnDetachedFromVisualTreeCore">OnDetachedFromVisualTreeCore(VisualTreeAttachmentEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Shapes_Shape_OnGeometryChanged">OnGeometryChanged(Object, EventArgs)</a></td>
<td>Called when the underlying <a href="T_Avalonia_Media_Geometry">Geometry</a> changed<br />(Inherited from <a href="T_Avalonia_Controls_Shapes_Shape">Shape</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnGotFocus">OnGotFocus(GotFocusEventArgs)</a></td>
<td>Called before the <a href="E_Avalonia_Input_InputElement_GotFocus">GotFocus</a> event occurs.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_StyledElement_OnInitialized">OnInitialized()</a></td>
<td>Called when the control finishes initialization.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_InputElement_OnKeyDown">OnKeyDown(KeyEventArgs)</a></td>
<td>Called before the <a href="E_Avalonia_Input_InputElement_KeyDown">KeyDown</a> event occurs.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnKeyUp">OnKeyUp(KeyEventArgs)</a></td>
<td>Called before the <a href="E_Avalonia_Input_InputElement_KeyUp">KeyUp</a> event occurs.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnLoaded">OnLoaded(RoutedEventArgs)</a></td>
<td>Invoked just before the <a href="E_Avalonia_Controls_Control_Loaded">Loaded</a> event.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnLostFocus">OnLostFocus(RoutedEventArgs)</a></td>
<td>Called before the <a href="E_Avalonia_Input_InputElement_LostFocus">LostFocus</a> event occurs.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_Layoutable_OnMeasureInvalidated">OnMeasureInvalidated()</a></td>
<td>Called by InvalidateMeasure<br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_InputElement_OnPointerCaptureLost">OnPointerCaptureLost(PointerCaptureLostEventArgs)</a></td>
<td>Called before the <a href="E_Avalonia_Input_InputElement_PointerCaptureLost">PointerCaptureLost</a> event occurs.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_InputElement_OnPointerEntered">OnPointerEntered(PointerEventArgs)</a></td>
<td>Called before the <a href="E_Avalonia_Input_InputElement_PointerEntered">PointerEntered</a> event occurs.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_InputElement_OnPointerExited">OnPointerExited(PointerEventArgs)</a></td>
<td>Called before the <a href="E_Avalonia_Input_InputElement_PointerExited">PointerExited</a> event occurs.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_InputElement_OnPointerMoved">OnPointerMoved(PointerEventArgs)</a></td>
<td>Called before the <a href="E_Avalonia_Input_InputElement_PointerMoved">PointerMoved</a> event occurs.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_InputElement_OnPointerPressed">OnPointerPressed(PointerPressedEventArgs)</a></td>
<td>Called before the <a href="E_Avalonia_Input_InputElement_PointerPressed">PointerPressed</a> event occurs.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnPointerReleased">OnPointerReleased(PointerReleasedEventArgs)</a></td>
<td>Called before the <a href="E_Avalonia_Input_InputElement_PointerReleased">PointerReleased</a> event occurs.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_InputElement_OnPointerWheelChanged">OnPointerWheelChanged(PointerWheelEventArgs)</a></td>
<td>Called before the <a href="E_Avalonia_Input_InputElement_PointerWheelChanged">PointerWheelChanged</a> event occurs.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Shapes_Shape_OnPropertyChanged">OnPropertyChanged(AvaloniaPropertyChangedEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Shapes_Shape">Shape</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Animation_Animatable_OnPropertyChangedCore">OnPropertyChangedCore(AvaloniaPropertyChangedEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Animation_Animatable">Animatable</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnSizeChanged">OnSizeChanged(SizeChangedEventArgs)</a></td>
<td>Invoked just before the <a href="E_Avalonia_Controls_Control_SizeChanged">SizeChanged</a> event.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_InputElement_OnTextInput">OnTextInput(TextInputEventArgs)</a></td>
<td>Called before the <a href="E_Avalonia_Input_InputElement_TextInput">TextInput</a> event occurs.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnUnloaded">OnUnloaded(RoutedEventArgs)</a></td>
<td>Invoked just before the <a href="E_Avalonia_Controls_Control_Unloaded">Unloaded</a> event.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_Layoutable_OnVisualParentChanged">OnVisualParentChanged(Visual, Visual)</a></td>
<td>Called when the control's visual parent changes.<br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Interactivity_Interactive_RaiseEvent">RaiseEvent(RoutedEventArgs)</a></td>
<td>Raises a routed event.<br />(Inherited from <a href="T_Avalonia_Interactivity_Interactive">Interactive</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_RaisePropertyChanged__1">RaisePropertyChanged(T)(DirectPropertyBase(T), T, T)</a></td>
<td>Raises the <a href="E_Avalonia_AvaloniaObject_PropertyChanged">PropertyChanged</a> event for a direct property.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
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
<td><a href="M_Avalonia_Controls_Shapes_Shape_Render">Render(DrawingContext)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Shapes_Shape">Shape</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_SetAndRaise__1">SetAndRaise(T)(DirectPropertyBase(T), T, T)</a></td>
<td>Sets the backing field for a direct avalonia property, raising the <a href="E_Avalonia_AvaloniaObject_PropertyChanged">PropertyChanged</a> event if the value has changed.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
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
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_StyledElement_TryGetResource">TryGetResource(Object, ThemeVariant, Object)</a></td>
<td>Tries to find a resource within the object.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_UpdateDataValidation">UpdateDataValidation(AvaloniaProperty, BindingValueType, Exception)</a></td>
<td>Called to update the validation state for properties for which data validation is enabled.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_InputElement_UpdateIsEffectivelyEnabled">UpdateIsEffectivelyEnabled()</a></td>
<td>Updates the <a href="P_Avalonia_Input_InputElement_IsEffectivelyEnabled">IsEffectivelyEnabled</a> property value according to the parent control's enabled state and <a href="P_Avalonia_Input_InputElement_IsEnabledCore">IsEnabledCore</a>.<br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td>
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
<td><a href="E_Avalonia_Controls_Control_ContextRequested">ContextRequested</a></td>
<td>Occurs when the user has completed a context input gesture, such as a right-click.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_StyledElement_DataContextChanged">DataContextChanged</a></td>
<td>Occurs when the <a href="P_Avalonia_StyledElement_DataContext">DataContext</a> property changes.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
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
<td><a href="E_Avalonia_AvaloniaObject_PropertyChanged">PropertyChanged</a></td>
<td>Raised when a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> value changes on this object.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_StyledElement_ResourcesChanged">ResourcesChanged</a></td>
<td>Occurs when a resource in this styled element or a parent styled element has changed.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
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
<td><a href="F_Avalonia_Controls_Shapes_Line_EndPointProperty">EndPointProperty</a></td>
<td> </td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Shapes_Line_StartPointProperty">StartPointProperty</a></td>
<td> </td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Interactivity_InteractiveExtensions_AddDisposableHandler__1">AddDisposableHandler(TEventArgs)(RoutedEvent(TEventArgs), EventHandler(TEventArgs), RoutingStrategies, Boolean)</a></td>
<td>Adds a handler for the specified routed event and returns a disposable that can terminate the event subscription.<br />(Defined by <a href="T_Avalonia_Interactivity_InteractiveExtensions">InteractiveExtensions</a>)</td>
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
<a href="N_Avalonia_Controls_Shapes">Avalonia.Controls.Shapes Namespace</a>  
