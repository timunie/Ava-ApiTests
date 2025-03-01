import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ScrollContentPresenter Class


Presents a scrolling view of content inside a <a href="T_Avalonia_Controls_ScrollViewer">ScrollViewer</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Presenters">Avalonia.Controls.Presenters</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class ScrollContentPresenter : ContentPresenter, 
	IScrollable, IScrollAnchorProvider
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class ScrollContentPresenter
	Inherits ContentPresenter
	Implements IScrollable, IScrollAnchorProvider
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type ScrollContentPresenter = 
    class
        inherit ContentPresenter
        interface IScrollable
        interface IScrollAnchorProvider
    end
```
</TabItem>
</Tabs>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  AvaloniaObject  →  Animatable  →  StyledElement  →  Visual  →  Layoutable  →  Interactive  →  InputElement  →  <a href="T_Avalonia_Controls_Control">Control</a>  →  <a href="T_Avalonia_Controls_Presenters_ContentPresenter">ContentPresenter</a>  →  ScrollContentPresenter</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Controls_IScrollAnchorProvider">IScrollAnchorProvider</a>, <a href="T_Avalonia_Controls_Primitives_IScrollable">IScrollable</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_Presenters_ScrollContentPresenter__ctor">ScrollContentPresenter</a></td>
<td>Initializes a new instance of the ScrollContentPresenter class.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td>ActualThemeVariant</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Presenters_ContentPresenter_Background">Background</a></td>
<td>Gets or sets a brush with which to paint the background.<br />(Inherited from <a href="T_Avalonia_Controls_Presenters_ContentPresenter">ContentPresenter</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Presenters_ContentPresenter_BackgroundSizing">BackgroundSizing</a></td>
<td>Gets or sets how the background is drawn relative to the border.<br />(Inherited from <a href="T_Avalonia_Controls_Presenters_ContentPresenter">ContentPresenter</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Presenters_ContentPresenter_BorderBrush">BorderBrush</a></td>
<td>Gets or sets a brush with which to paint the border.<br />(Inherited from <a href="T_Avalonia_Controls_Presenters_ContentPresenter">ContentPresenter</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Presenters_ContentPresenter_BorderThickness">BorderThickness</a></td>
<td>Gets or sets the thickness of the border.<br />(Inherited from <a href="T_Avalonia_Controls_Presenters_ContentPresenter">ContentPresenter</a>)</td>
</tr>
<tr>
<td>Bounds</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Presenters_ContentPresenter_BoxShadow">BoxShadow</a></td>
<td>Gets or sets the box shadow effect parameters<br />(Inherited from <a href="T_Avalonia_Controls_Presenters_ContentPresenter">ContentPresenter</a>)</td>
</tr>
<tr>
<td>BypassFlowDirectionPolicies</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Presenters_ScrollContentPresenter_CanHorizontallyScroll">CanHorizontallyScroll</a></td>
<td>Gets or sets a value indicating whether the content can be scrolled horizontally.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Presenters_ScrollContentPresenter_CanVerticallyScroll">CanVerticallyScroll</a></td>
<td>Gets or sets a value indicating whether the content can be scrolled horizontally.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Presenters_ContentPresenter_Child">Child</a></td>
<td>Gets the control displayed by the presenter.<br />(Inherited from <a href="T_Avalonia_Controls_Presenters_ContentPresenter">ContentPresenter</a>)</td>
</tr>
<tr>
<td>Classes</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>Clip</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td>ClipToBounds</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Presenters_ContentPresenter_Content">Content</a></td>
<td>Gets or sets the content to be displayed by the presenter.<br />(Inherited from <a href="T_Avalonia_Controls_Presenters_ContentPresenter">ContentPresenter</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Presenters_ContentPresenter_ContentTemplate">ContentTemplate</a></td>
<td>Gets or sets the data template used to display the content of the control.<br />(Inherited from <a href="T_Avalonia_Controls_Presenters_ContentPresenter">ContentPresenter</a>)</td>
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
<td><a href="P_Avalonia_Controls_Presenters_ContentPresenter_CornerRadius">CornerRadius</a></td>
<td>Gets or sets the radius of the border rounded corners.<br />(Inherited from <a href="T_Avalonia_Controls_Presenters_ContentPresenter">ContentPresenter</a>)</td>
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
<td>Effect</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Presenters_ScrollContentPresenter_Extent">Extent</a></td>
<td>Gets the extent of the scrollable content.</td>
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
<td><a href="P_Avalonia_Controls_Presenters_ContentPresenter_FontFamily">FontFamily</a></td>
<td>Gets or sets the font family.<br />(Inherited from <a href="T_Avalonia_Controls_Presenters_ContentPresenter">ContentPresenter</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Presenters_ContentPresenter_FontSize">FontSize</a></td>
<td>Gets or sets the font size.<br />(Inherited from <a href="T_Avalonia_Controls_Presenters_ContentPresenter">ContentPresenter</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Presenters_ContentPresenter_FontStretch">FontStretch</a></td>
<td>Gets or sets the font stretch.<br />(Inherited from <a href="T_Avalonia_Controls_Presenters_ContentPresenter">ContentPresenter</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Presenters_ContentPresenter_FontStyle">FontStyle</a></td>
<td>Gets or sets the font style.<br />(Inherited from <a href="T_Avalonia_Controls_Presenters_ContentPresenter">ContentPresenter</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Presenters_ContentPresenter_FontWeight">FontWeight</a></td>
<td>Gets or sets the font weight.<br />(Inherited from <a href="T_Avalonia_Controls_Presenters_ContentPresenter">ContentPresenter</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Presenters_ContentPresenter_Foreground">Foreground</a></td>
<td>Gets or sets a brush used to paint the text.<br />(Inherited from <a href="T_Avalonia_Controls_Presenters_ContentPresenter">ContentPresenter</a>)</td>
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
<td><a href="P_Avalonia_Controls_Presenters_ContentPresenter_HorizontalContentAlignment">HorizontalContentAlignment</a></td>
<td>Gets or sets the horizontal alignment of the content within the border the control.<br />(Inherited from <a href="T_Avalonia_Controls_Presenters_ContentPresenter">ContentPresenter</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Presenters_ScrollContentPresenter_HorizontalSnapPointsAlignment">HorizontalSnapPointsAlignment</a></td>
<td>Gets or sets how the existing snap points are horizontally aligned versus the initial viewport.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Presenters_ScrollContentPresenter_HorizontalSnapPointsType">HorizontalSnapPointsType</a></td>
<td>Gets or sets how scroll gesture reacts to the snap points along the horizontal axis.</td>
</tr>
<tr>
<td>InheritanceParent</td>
<td><br />(Inherited from AvaloniaObject)</td>
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
<td><a href="P_Avalonia_Controls_Presenters_ScrollContentPresenter_IsScrollChainingEnabled">IsScrollChainingEnabled</a></td>
<td>Gets or sets if scroll chaining is enabled. The default value is true.</td>
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
<td><a href="P_Avalonia_Controls_Presenters_ContentPresenter_LineHeight">LineHeight</a></td>
<td>Gets or sets the line height<br />(Inherited from <a href="T_Avalonia_Controls_Presenters_ContentPresenter">ContentPresenter</a>)</td>
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
<td><a href="P_Avalonia_Controls_Presenters_ContentPresenter_MaxLines">MaxLines</a></td>
<td>Gets or sets the max lines<br />(Inherited from <a href="T_Avalonia_Controls_Presenters_ContentPresenter">ContentPresenter</a>)</td>
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
<td><a href="P_Avalonia_Controls_Presenters_ScrollContentPresenter_Offset">Offset</a></td>
<td>Gets or sets the current scroll offset.</td>
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
<td><a href="P_Avalonia_Controls_Presenters_ContentPresenter_Padding">Padding</a></td>
<td>Gets or sets the space between the border and the <a href="P_Avalonia_Controls_Presenters_ContentPresenter_Child">Child</a> control.<br />(Inherited from <a href="T_Avalonia_Controls_Presenters_ContentPresenter">ContentPresenter</a>)</td>
</tr>
<tr>
<td>Parent</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>PseudoClasses</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Presenters_ContentPresenter_RecognizesAccessKey">RecognizesAccessKey</a></td>
<td>Determine if <a href="T_Avalonia_Controls_Presenters_ContentPresenter">ContentPresenter</a> should use <a href="T_Avalonia_Controls_Primitives_AccessText">AccessText</a> in its style<br />(Inherited from <a href="T_Avalonia_Controls_Presenters_ContentPresenter">ContentPresenter</a>)</td>
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
<td>Resources</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>StyleKey</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>StyleKeyOverride</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>Styles</td>
<td><br />(Inherited from StyledElement)</td>
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
<td>TemplatedParent</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Presenters_ContentPresenter_TextAlignment">TextAlignment</a></td>
<td>Gets or sets the text alignment<br />(Inherited from <a href="T_Avalonia_Controls_Presenters_ContentPresenter">ContentPresenter</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Presenters_ContentPresenter_TextTrimming">TextTrimming</a></td>
<td>Gets or sets the text trimming<br />(Inherited from <a href="T_Avalonia_Controls_Presenters_ContentPresenter">ContentPresenter</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Presenters_ContentPresenter_TextWrapping">TextWrapping</a></td>
<td>Gets or sets the text wrapping<br />(Inherited from <a href="T_Avalonia_Controls_Presenters_ContentPresenter">ContentPresenter</a>)</td>
</tr>
<tr>
<td>Theme</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>Transitions</td>
<td><br />(Inherited from Animatable)</td>
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
<td><a href="P_Avalonia_Controls_Presenters_ContentPresenter_VerticalContentAlignment">VerticalContentAlignment</a></td>
<td>Gets or sets the vertical alignment of the content within the border of the control.<br />(Inherited from <a href="T_Avalonia_Controls_Presenters_ContentPresenter">ContentPresenter</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Presenters_ScrollContentPresenter_VerticalSnapPointsAlignment">VerticalSnapPointsAlignment</a></td>
<td>Gets or sets how the existing snap points are vertically aligned versus the initial viewport.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Presenters_ScrollContentPresenter_VerticalSnapPointsType">VerticalSnapPointsType</a></td>
<td>Gets or sets how scroll gesture reacts to the snap points along the vertical axis.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Presenters_ScrollContentPresenter_Viewport">Viewport</a></td>
<td>Gets the size of the viewport on the scrollable content.</td>
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
<td>ZIndex</td>
<td><br />(Inherited from Visual)</td>
</tr>
</table>

## Methods
<table>
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
<td><a href="M_Avalonia_Controls_Presenters_ContentPresenter_ApplyTemplate">ApplyTemplate</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Presenters_ContentPresenter">ContentPresenter</a>)</td>
</tr>
<tr>
<td>Arrange</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>ArrangeCore</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Presenters_ScrollContentPresenter_ArrangeOverride">ArrangeOverride</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_Presenters_ContentPresenter_ArrangeOverride">ContentPresenter.ArrangeOverride(Size)</a>)</td>
</tr>
<tr>
<td>BeginInit</td>
<td><br />(Inherited from StyledElement)</td>
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
<td><a href="M_Avalonia_Controls_Presenters_ScrollContentPresenter_BringDescendantIntoView">BringDescendantIntoView</a></td>
<td>Attempts to bring a portion of the target visual into view by scrolling the content.</td>
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
<td>CoerceValue</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>EndInit</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>Equals</td>
<td><br />(Inherited from AvaloniaObject)</td>
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
<td><a href="M_Avalonia_Controls_Control_GetTemplateFocusTarget">GetTemplateFocusTarget</a></td>
<td>Gets the element that receives the focus adorner.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
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
<td>InvalidateMirrorTransform</td>
<td><br />(Inherited from Visual)</td>
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
<td>LogicalChildrenCollectionChanged</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td>Measure</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>MeasureCore</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Presenters_ScrollContentPresenter_MeasureOverride">MeasureOverride</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_Presenters_ContentPresenter_MeasureOverride">ContentPresenter.MeasureOverride(Size)</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Presenters_ContentPresenter_OnAttachedToLogicalTree">OnAttachedToLogicalTree</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Presenters_ContentPresenter">ContentPresenter</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Presenters_ScrollContentPresenter_OnAttachedToVisualTree">OnAttachedToVisualTree</a></td>
<td><br />(Overrides Visual.OnAttachedToVisualTree(VisualTreeAttachmentEventArgs))</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnAttachedToVisualTreeCore">OnAttachedToVisualTreeCore</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnCreateAutomationPeer">OnCreateAutomationPeer</a></td>
<td>Returns a new, type-specific <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a> implementation for the control.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
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
<td>OnDetachedFromLogicalTree</td>
<td><br />(Inherited from StyledElement)</td>
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
<td><a href="M_Avalonia_Controls_Presenters_ScrollContentPresenter_OnPointerWheelChanged">OnPointerWheelChanged</a></td>
<td><br />(Overrides InputElement.OnPointerWheelChanged(PointerWheelEventArgs))</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Presenters_ScrollContentPresenter_OnPropertyChanged">OnPropertyChanged</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_Presenters_ContentPresenter_OnPropertyChanged">ContentPresenter.OnPropertyChanged(AvaloniaPropertyChangedEventArgs)</a>)</td>
</tr>
<tr>
<td>OnPropertyChangedCore</td>
<td><br />(Inherited from Animatable)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnSizeChanged">OnSizeChanged</a></td>
<td>Invoked just before the <a href="E_Avalonia_Controls_Control_SizeChanged">SizeChanged</a> event.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
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
<td>RemoveHandler(RoutedEvent, Delegate)</td>
<td><br />(Inherited from Interactive)</td>
</tr>
<tr>
<td>RemoveHandler``1(RoutedEvent(UMP), EventHandler(UMP))</td>
<td><br />(Inherited from Interactive)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Presenters_ContentPresenter_Render">Render</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Presenters_ContentPresenter">ContentPresenter</a>)</td>
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
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td>TryGetResource</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Presenters_ContentPresenter_UpdateChild">UpdateChild</a></td>
<td>Updates the <a href="P_Avalonia_Controls_Presenters_ContentPresenter_Child">Child</a> control based on the control's <a href="P_Avalonia_Controls_Presenters_ContentPresenter_Content">Content</a>.<br />(Inherited from <a href="T_Avalonia_Controls_Presenters_ContentPresenter">ContentPresenter</a>)</td>
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
<td><a href="E_Avalonia_Controls_Control_ContextRequested">ContextRequested</a></td>
<td>Occurs when the user has completed a context input gesture, such as a right-click.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td>DataContextChanged</td>
<td><br />(Inherited from StyledElement)</td>
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
<td>PropertyChanged</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>ResourcesChanged</td>
<td><br />(Inherited from StyledElement)</td>
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
<td><a href="F_Avalonia_Controls_Presenters_ScrollContentPresenter_CanHorizontallyScrollProperty">CanHorizontallyScrollProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_Presenters_ScrollContentPresenter_CanHorizontallyScroll">CanHorizontallyScroll</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Presenters_ScrollContentPresenter_CanVerticallyScrollProperty">CanVerticallyScrollProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_Presenters_ScrollContentPresenter_CanVerticallyScroll">CanVerticallyScroll</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Presenters_ScrollContentPresenter_ExtentProperty">ExtentProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_Presenters_ScrollContentPresenter_Extent">Extent</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Presenters_ScrollContentPresenter_HorizontalSnapPointsAlignmentProperty">HorizontalSnapPointsAlignmentProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_Presenters_ScrollContentPresenter_HorizontalSnapPointsAlignment">HorizontalSnapPointsAlignment</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Presenters_ScrollContentPresenter_HorizontalSnapPointsTypeProperty">HorizontalSnapPointsTypeProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_Presenters_ScrollContentPresenter_HorizontalSnapPointsType">HorizontalSnapPointsType</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Presenters_ScrollContentPresenter_IsScrollChainingEnabledProperty">IsScrollChainingEnabledProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_Presenters_ScrollContentPresenter_IsScrollChainingEnabled">IsScrollChainingEnabled</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Presenters_ScrollContentPresenter_OffsetProperty">OffsetProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_Presenters_ScrollContentPresenter_Offset">Offset</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Presenters_ScrollContentPresenter_VerticalSnapPointsAlignmentProperty">VerticalSnapPointsAlignmentProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_Presenters_ScrollContentPresenter_VerticalSnapPointsAlignment">VerticalSnapPointsAlignment</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Presenters_ScrollContentPresenter_VerticalSnapPointsTypeProperty">VerticalSnapPointsTypeProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_Presenters_ScrollContentPresenter_VerticalSnapPointsType">VerticalSnapPointsType</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Presenters_ScrollContentPresenter_ViewportProperty">ViewportProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_Presenters_ScrollContentPresenter_Viewport">Viewport</a> property.</td>
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
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_Presenters">Avalonia.Controls.Presenters Namespace</a>  
