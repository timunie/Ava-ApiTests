import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# TextBlock Class


A control that displays a block of text.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class TextBlock : Control, ILogical
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class TextBlock
	Inherits Control
	Implements ILogical
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type TextBlock = 
    class
        inherit Control
        interface ILogical
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/TextBlock.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  AvaloniaObject  →  Animatable  →  StyledElement  →  Visual  →  Layoutable  →  Interactive  →  InputElement  →  <a href="T_Avalonia_Controls_Control">Control</a>  →  TextBlock</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_Controls_Primitives_AccessText">Avalonia.Controls.Primitives.AccessText</a><br /><a href="T_Avalonia_Controls_SelectableTextBlock">Avalonia.Controls.SelectableTextBlock</a></td></tr>
<tr><td><strong>Implements</strong></td><td>ILogical</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_TextBlock__ctor">TextBlock()</a></td>
<td>Initializes a new instance of the TextBlock class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td>ActualThemeVariant</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBlock_Background">Background</a></td>
<td>Gets or sets a brush used to paint the control's background.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBlock_BaselineOffset">BaselineOffset</a></td>
<td>The BaselineOffset property provides an adjustment to baseline offset</td>
</tr>
<tr>
<td>Bounds</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBlock_BypassFlowDirectionPolicies">BypassFlowDirectionPolicies</a></td>
<td><br />(Overrides Visual.BypassFlowDirectionPolicies)</td>
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
<td><a href="P_Avalonia_Controls_Control_ContextFlyout">ContextFlyout</a></td>
<td>Gets or sets a context flyout to the control<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Control_ContextMenu">ContextMenu</a></td>
<td>Gets or sets a context menu to the control.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
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
<td><a href="P_Avalonia_Controls_TextBlock_FontFamily">FontFamily</a></td>
<td>Gets or sets the font family used to draw the control's text.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBlock_FontFeatures">FontFeatures</a></td>
<td>Gets or sets the font features.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBlock_FontSize">FontSize</a></td>
<td>Gets or sets the size of the control's text in points.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBlock_FontStretch">FontStretch</a></td>
<td>Gets or sets the font stretch used to draw the control's text.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBlock_FontStyle">FontStyle</a></td>
<td>Gets or sets the font style used to draw the control's text.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBlock_FontWeight">FontWeight</a></td>
<td>Gets or sets the font weight used to draw the control's text.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBlock_Foreground">Foreground</a></td>
<td>Gets or sets the brush used to draw the control's text and other foreground elements.</td>
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
<td>InheritanceParent</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBlock_Inlines">Inlines</a></td>
<td>Gets or sets the inlines.</td>
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
<td><a href="P_Avalonia_Controls_TextBlock_LetterSpacing">LetterSpacing</a></td>
<td>Gets or sets the letter spacing.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBlock_LineHeight">LineHeight</a></td>
<td>Gets or sets the height of each line of content.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBlock_LineSpacing">LineSpacing</a></td>
<td>Gets or sets the extra distance of each line to the next line.</td>
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
<td><a href="P_Avalonia_Controls_TextBlock_MaxLines">MaxLines</a></td>
<td>Gets or sets the maximum number of text lines.</td>
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
<td>Opacity</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td>OpacityMask</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBlock_Padding">Padding</a></td>
<td>Gets or sets the padding to place around the <a href="P_Avalonia_Controls_TextBlock_Text">Text</a>.</td>
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
<td><a href="P_Avalonia_Controls_TextBlock_Text">Text</a></td>
<td>Gets or sets the text.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBlock_TextAlignment">TextAlignment</a></td>
<td>Gets or sets the text alignment.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBlock_TextDecorations">TextDecorations</a></td>
<td>Gets or sets the text decorations.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBlock_TextLayout">TextLayout</a></td>
<td>Gets the <a href="P_Avalonia_Controls_TextBlock_TextLayout">TextLayout</a> used to render the text.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBlock_TextTrimming">TextTrimming</a></td>
<td>Gets or sets the control's text trimming mode.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBlock_TextWrapping">TextWrapping</a></td>
<td>Gets or sets the control's text wrapping mode.</td>
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
<td>ApplyStyling()</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>ApplyTemplate()</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>Arrange(Rect)</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>ArrangeCore(Rect)</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBlock_ArrangeOverride">ArrangeOverride(Size)</a></td>
<td><br />(Overrides Layoutable.ArrangeOverride(Size))</td>
</tr>
<tr>
<td>BeginInit()</td>
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
<td>BuildEventRoute(RoutedEvent)</td>
<td><br />(Inherited from Interactive)</td>
</tr>
<tr>
<td>CheckAccess()</td>
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
<td>CoerceValue(AvaloniaProperty)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBlock_CreateTextLayout">CreateTextLayout(String)</a></td>
<td>Creates the <a href="P_Avalonia_Controls_TextBlock_TextLayout">TextLayout</a> used to render the text.</td>
</tr>
<tr>
<td>EndInit()</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>Equals(Object)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td>Focus(NavigationMethod, KeyModifiers)</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBlock_GetBaselineOffset">GetBaselineOffset(Control)</a></td>
<td>Reads the attached property from the given element</td>
</tr>
<tr>
<td>GetBaseValue``1(StyledProperty(UMP))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>GetHashCode()</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBlock_GetLetterSpacing">GetLetterSpacing(Control)</a></td>
<td>Reads the attached property from the given element</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBlock_GetLineHeight">GetLineHeight(Control)</a></td>
<td>Reads the attached property from the given element</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBlock_GetMaxLines">GetMaxLines(Control)</a></td>
<td>Reads the attached property from the given element</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_GetTemplateFocusTarget">GetTemplateFocusTarget()</a></td>
<td>Gets the element that receives the focus adorner.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBlock_GetTextAlignment">GetTextAlignment(Control)</a></td>
<td>Reads the attached property from the given element</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBlock_GetTextTrimming">GetTextTrimming(Control)</a></td>
<td>Reads the attached property from the given element</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBlock_GetTextWrapping">GetTextWrapping(Control)</a></td>
<td>Reads the attached property from the given element</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
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
<td>InitializeIfNeeded()</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>InvalidateArrange()</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>InvalidateMeasure()</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>InvalidateMirrorTransform()</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBlock_InvalidateTextLayout">InvalidateTextLayout()</a></td>
<td>Invalidates <a href="P_Avalonia_Controls_TextBlock_TextLayout">TextLayout</a>.</td>
</tr>
<tr>
<td>InvalidateVisual()</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td>IsAnimating(AvaloniaProperty)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>IsSet(AvaloniaProperty)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>LogicalChildrenCollectionChanged(Object, NotifyCollectionChangedEventArgs)</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td>Measure(Size)</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>MeasureCore(Size)</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBlock_MeasureOverride">MeasureOverride(Size)</a></td>
<td><br />(Overrides Layoutable.MeasureOverride(Size))</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td>OnAttachedToLogicalTree(LogicalTreeAttachmentEventArgs)</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>OnAttachedToVisualTree(VisualTreeAttachmentEventArgs)</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnAttachedToVisualTreeCore">OnAttachedToVisualTreeCore(VisualTreeAttachmentEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBlock_OnCreateAutomationPeer">OnCreateAutomationPeer()</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_Control_OnCreateAutomationPeer">Control.OnCreateAutomationPeer()</a>)</td>
</tr>
<tr>
<td>OnDataContextBeginUpdate()</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>OnDataContextChanged(EventArgs)</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>OnDataContextEndUpdate()</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>OnDetachedFromLogicalTree(LogicalTreeAttachmentEventArgs)</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>OnDetachedFromVisualTree(VisualTreeAttachmentEventArgs)</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnDetachedFromVisualTreeCore">OnDetachedFromVisualTreeCore(VisualTreeAttachmentEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnGotFocus">OnGotFocus(GotFocusEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td>OnInitialized()</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>OnKeyDown(KeyEventArgs)</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnKeyUp">OnKeyUp(KeyEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnLoaded">OnLoaded(RoutedEventArgs)</a></td>
<td>Invoked just before the <a href="E_Avalonia_Controls_Control_Loaded">Loaded</a> event.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnLostFocus">OnLostFocus(RoutedEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBlock_OnMeasureInvalidated">OnMeasureInvalidated()</a></td>
<td><br />(Overrides Layoutable.OnMeasureInvalidated())</td>
</tr>
<tr>
<td>OnPointerCaptureLost(PointerCaptureLostEventArgs)</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>OnPointerEntered(PointerEventArgs)</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>OnPointerExited(PointerEventArgs)</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>OnPointerMoved(PointerEventArgs)</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>OnPointerPressed(PointerPressedEventArgs)</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnPointerReleased">OnPointerReleased(PointerReleasedEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td>OnPointerWheelChanged(PointerWheelEventArgs)</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBlock_OnPropertyChanged">OnPropertyChanged(AvaloniaPropertyChangedEventArgs)</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_Control_OnPropertyChanged">Control.OnPropertyChanged(AvaloniaPropertyChangedEventArgs)</a>)</td>
</tr>
<tr>
<td>OnPropertyChangedCore(AvaloniaPropertyChangedEventArgs)</td>
<td><br />(Inherited from Animatable)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnSizeChanged">OnSizeChanged(SizeChangedEventArgs)</a></td>
<td>Invoked just before the <a href="E_Avalonia_Controls_Control_SizeChanged">SizeChanged</a> event.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td>OnTextInput(TextInputEventArgs)</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnUnloaded">OnUnloaded(RoutedEventArgs)</a></td>
<td>Invoked just before the <a href="E_Avalonia_Controls_Control_Unloaded">Unloaded</a> event.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td>OnVisualParentChanged(Visual, Visual)</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>RaiseEvent(RoutedEventArgs)</td>
<td><br />(Inherited from Interactive)</td>
</tr>
<tr>
<td>RaisePropertyChanged``1(DirectPropertyBase(UMP), UMP, UMP)</td>
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
<td><a href="M_Avalonia_Controls_TextBlock_Render">Render(DrawingContext)</a></td>
<td>Renders the TextBlock to a drawing context.<br />(Overrides Visual.Render(DrawingContext))</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBlock_RenderTextLayout">RenderTextLayout(DrawingContext, Point)</a></td>
<td> </td>
</tr>
<tr>
<td>SetAndRaise``1(DirectPropertyBase(UMP), UMP, UMP)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBlock_SetBaselineOffset">SetBaselineOffset(Control, Double)</a></td>
<td>Writes the attached property BaselineOffset to the given element.</td>
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
<td><a href="M_Avalonia_Controls_TextBlock_SetLetterSpacing">SetLetterSpacing(Control, Double)</a></td>
<td>Writes the attached property LetterSpacing to the given element.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBlock_SetLineHeight">SetLineHeight(Control, Double)</a></td>
<td>Writes the attached property BaselineOffset to the given element.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBlock_SetMaxLines">SetMaxLines(Control, Int32)</a></td>
<td>Writes the attached property BaselineOffset to the given element.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBlock_SetTextAlignment">SetTextAlignment(Control, TextAlignment)</a></td>
<td>Writes the attached property BaselineOffset to the given element.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBlock_SetTextTrimming">SetTextTrimming(Control, TextTrimming)</a></td>
<td>Writes the attached property BaselineOffset to the given element.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBlock_SetTextWrapping">SetTextWrapping(Control, TextWrapping)</a></td>
<td>Writes the attached property BaselineOffset to the given element.</td>
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
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td>TryGetResource(Object, ThemeVariant, Object)</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>UpdateDataValidation(AvaloniaProperty, BindingValueType, Exception)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>UpdateIsEffectivelyEnabled()</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>UpdateLayout()</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>VerifyAccess()</td>
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
<td><a href="F_Avalonia_Controls_TextBlock__constraint">_constraint</a></td>
<td> </td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBlock__textRuns">_textRuns</a></td>
<td> </td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBlock_BackgroundProperty">BackgroundProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBlock_Background">Background</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBlock_BaselineOffsetProperty">BaselineOffsetProperty</a></td>
<td>DependencyProperty for <a href="P_Avalonia_Controls_TextBlock_BaselineOffset">BaselineOffset</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBlock_FontFamilyProperty">FontFamilyProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBlock_FontFamily">FontFamily</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBlock_FontFeaturesProperty">FontFeaturesProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBlock_FontFeatures">FontFeatures</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBlock_FontSizeProperty">FontSizeProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBlock_FontSize">FontSize</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBlock_FontStretchProperty">FontStretchProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBlock_FontStretch">FontStretch</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBlock_FontStyleProperty">FontStyleProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBlock_FontStyle">FontStyle</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBlock_FontWeightProperty">FontWeightProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBlock_FontWeight">FontWeight</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBlock_ForegroundProperty">ForegroundProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBlock_Foreground">Foreground</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBlock_InlinesProperty">InlinesProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBlock_Inlines">Inlines</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBlock_LetterSpacingProperty">LetterSpacingProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBlock_LetterSpacing">LetterSpacing</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBlock_LineHeightProperty">LineHeightProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBlock_LineHeight">LineHeight</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBlock_LineSpacingProperty">LineSpacingProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBlock_LineSpacing">LineSpacing</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBlock_MaxLinesProperty">MaxLinesProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBlock_MaxLines">MaxLines</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBlock_PaddingProperty">PaddingProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBlock_Padding">Padding</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBlock_TextAlignmentProperty">TextAlignmentProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBlock_TextAlignment">TextAlignment</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBlock_TextDecorationsProperty">TextDecorationsProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBlock_TextDecorations">TextDecorations</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBlock_TextProperty">TextProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBlock_Text">Text</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBlock_TextTrimmingProperty">TextTrimmingProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBlock_TextTrimming">TextTrimming</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBlock_TextWrappingProperty">TextWrappingProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBlock_TextWrapping">TextWrapping</a> property.</td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_ControlExtensions_BringIntoView_1">BringIntoView()</a></td>
<td>Tries to bring the control into view.<br />(Defined by <a href="T_Avalonia_Controls_ControlExtensions">ControlExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ControlExtensions_BringIntoView">BringIntoView(Rect)</a></td>
<td>Tries to bring the control into view.<br />(Defined by <a href="T_Avalonia_Controls_ControlExtensions">ControlExtensions</a>)</td>
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
<td><a href="M_Avalonia_Controls_ControlExtensions_GetControl__1">GetControl(T)(String)</a></td>
<td>Finds the named control in the scope of the specified control and throws if not found.<br />(Defined by <a href="T_Avalonia_Controls_ControlExtensions">ControlExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
