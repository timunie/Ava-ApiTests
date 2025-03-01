import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# TextBox Class


Represents a control that can be used to display or edit unformatted text.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class TextBox : TemplatedControl
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class TextBox
	Inherits TemplatedControl
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type TextBox = 
    class
        inherit TemplatedControl
    end
```
</TabItem>
</Tabs>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  AvaloniaObject  →  Animatable  →  StyledElement  →  Visual  →  Layoutable  →  Interactive  →  InputElement  →  <a href="T_Avalonia_Controls_Control">Control</a>  →  <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>  →  TextBox</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_Controls_MaskedTextBox">Avalonia.Controls.MaskedTextBox</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_TextBox__ctor">TextBox</a></td>
<td>Initializes a new instance of the TextBox class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_AcceptsReturn">AcceptsReturn</a></td>
<td>Gets or sets a value that determines whether the TextBox allows and displays newline or return characters</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_AcceptsTab">AcceptsTab</a></td>
<td>Gets or sets a value that determins whether the TextBox allows and displays tabs</td>
</tr>
<tr>
<td>ActualThemeVariant</td>
<td><br />(Inherited from StyledElement)</td>
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
<td>BypassFlowDirectionPolicies</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_CanCopy">CanCopy</a></td>
<td>Property for determining if the Copy command can be executed.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_CanCut">CanCut</a></td>
<td>Property for determining if the Cut command can be executed.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_CanPaste">CanPaste</a></td>
<td>Property for determining if the Paste command can be executed.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_CanRedo">CanRedo</a></td>
<td>Gets a value that indicates whether the redo stack has an action that can be redone</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_CanUndo">CanUndo</a></td>
<td>Gets a value that indicates whether the undo stack has an action that can be undone</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_CaretBlinkInterval">CaretBlinkInterval</a></td>
<td>Gets or sets the caret blink rate</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_CaretBrush">CaretBrush</a></td>
<td>Gets or sets a brush that is used for the text caret</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_CaretIndex">CaretIndex</a></td>
<td>Gets or sets the index of the text caret</td>
</tr>
<tr>
<td>Classes</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_ClearSelectionOnLostFocus">ClearSelectionOnLostFocus</a></td>
<td>Gets or sets a value that determines whether the TextBox clears its selection after it loses focus.</td>
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
<td><a href="P_Avalonia_Controls_TextBox_CopyGesture">CopyGesture</a></td>
<td>Gets a platform-specific KeyGesture for the Copy action</td>
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
<td><a href="P_Avalonia_Controls_TextBox_CutGesture">CutGesture</a></td>
<td>Gets a platform-specific KeyGesture for the Cut action</td>
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
<td><a href="P_Avalonia_Controls_TextBox_HorizontalContentAlignment">HorizontalContentAlignment</a></td>
<td>Gets or sets the horizontal alignment of the content within the control.</td>
</tr>
<tr>
<td>InheritanceParent</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_InnerLeftContent">InnerLeftContent</a></td>
<td>Gets or sets custom content that is positioned on the left side of the text layout box</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_InnerRightContent">InnerRightContent</a></td>
<td>Gets or sets custom content that is positioned on the right side of the text layout box</td>
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
<td><a href="P_Avalonia_Controls_TextBox_IsInactiveSelectionHighlightEnabled">IsInactiveSelectionHighlightEnabled</a></td>
<td>Gets or sets a value that determines whether the TextBox shows a selection highlight when it is not focused.</td>
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
<td><a href="P_Avalonia_Controls_TextBox_IsReadOnly">IsReadOnly</a></td>
<td>Gets or sets a value whether this TextBox is read-only</td>
</tr>
<tr>
<td>IsTabStop</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_IsUndoEnabled">IsUndoEnabled</a></td>
<td>Property for determining whether undo/redo is enabled</td>
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
<td><a href="P_Avalonia_Controls_TextBox_LetterSpacing">LetterSpacing</a></td>
<td>Gets or sets the spacing between characters</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_LineHeight">LineHeight</a></td>
<td>Gets or sets the line height.</td>
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
<td><a href="P_Avalonia_Controls_TextBox_MaxLength">MaxLength</a></td>
<td>Gets or sets the maximum number of characters that the TextBox can accept. This constraint only applies for manually entered (user-inputted) text.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_MaxLines">MaxLines</a></td>
<td>Gets or sets the maximum number of visible lines to size to.</td>
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
<td><a href="P_Avalonia_Controls_TextBox_MinLines">MinLines</a></td>
<td>Gets or sets the minimum number of visible lines to size to.</td>
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
<td><a href="P_Avalonia_Controls_TextBox_NewLine">NewLine</a></td>
<td>Gets or sets which characters are inserted when Enter is pressed. Default: <a href="https://learn.microsoft.com/dotnet/api/system.environment.newline" target="_blank" rel="noopener noreferrer">NewLine</a></td>
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
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_Padding">Padding</a></td>
<td>Gets or sets the padding placed between the border of the control and its content.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td>Parent</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_PasswordChar">PasswordChar</a></td>
<td>Gets or sets the <a href="https://learn.microsoft.com/dotnet/api/system.char" target="_blank" rel="noopener noreferrer">Char</a> that should be used for password masking</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_PasteGesture">PasteGesture</a></td>
<td>Gets a platform-specific KeyGesture for the Paste action</td>
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
<td><a href="P_Avalonia_Controls_TextBox_RevealPassword">RevealPassword</a></td>
<td>Gets or sets whether text masked by <a href="P_Avalonia_Controls_TextBox_PasswordChar">PasswordChar</a> should be revealed</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_SelectedText">SelectedText</a></td>
<td>Gets or sets the text selected in the TextBox</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_SelectionBrush">SelectionBrush</a></td>
<td>Gets or sets a brush that is used to highlight selected text</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_SelectionEnd">SelectionEnd</a></td>
<td>Gets or sets the end position of the text selected in the TextBox</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_SelectionForegroundBrush">SelectionForegroundBrush</a></td>
<td>Gets or sets a brush that is used for the foreground of selected text</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_SelectionStart">SelectionStart</a></td>
<td>Gets or sets the starting position of the text selected in the TextBox</td>
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
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_Template">Template</a></td>
<td>Gets or sets the template that defines the control's appearance.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td>TemplatedParent</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_Text">Text</a></td>
<td>Gets or sets the Text content of the TextBox</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_TextAlignment">TextAlignment</a></td>
<td>Gets or sets the TextAlignment of the TextBox</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_TextWrapping">TextWrapping</a></td>
<td>Gets or sets the TextWrapping of the TextBox</td>
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
<td><a href="P_Avalonia_Controls_TextBox_UndoLimit">UndoLimit</a></td>
<td>Gets or sets the maximum number of items that can reside in the Undo stack</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_UseFloatingWatermark">UseFloatingWatermark</a></td>
<td>Gets or sets a value indicating whether the <a href="P_Avalonia_Controls_TextBox_Watermark">Watermark</a> will still be shown above the <a href="P_Avalonia_Controls_TextBox_Text">Text</a> even after a text value is set.</td>
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
<td><a href="P_Avalonia_Controls_TextBox_VerticalContentAlignment">VerticalContentAlignment</a></td>
<td>Gets or sets the vertical alignment of the content within the control.</td>
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
<td><a href="P_Avalonia_Controls_TextBox_Watermark">Watermark</a></td>
<td>Gets or sets the placeholder or descriptive text that is displayed even if the <a href="P_Avalonia_Controls_TextBox_Text">Text</a> property is not yet set.</td>
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
<td><a href="M_Avalonia_Controls_Primitives_TemplatedControl_ApplyTemplate">ApplyTemplate</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
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
<td>ArrangeOverride</td>
<td><br />(Inherited from Layoutable)</td>
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
<td>BuildEventRoute</td>
<td><br />(Inherited from Interactive)</td>
</tr>
<tr>
<td>CheckAccess</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBox_Clear">Clear</a></td>
<td>Clears the text in the TextBox</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBox_ClearSelection">ClearSelection</a></td>
<td>Clears the current selection, maintaining the <a href="P_Avalonia_Controls_TextBox_CaretIndex">CaretIndex</a></td>
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
<td><a href="M_Avalonia_Controls_TextBox_CoerceText">CoerceText</a></td>
<td>Coerces the current text.</td>
</tr>
<tr>
<td>CoerceValue</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBox_Copy">Copy</a></td>
<td>Copies the current text onto the clipboard</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBox_Cut">Cut</a></td>
<td>Cuts the current text onto the clipboard</td>
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
<td><a href="M_Avalonia_Controls_TextBox_MeasureOverride">MeasureOverride</a></td>
<td><br />(Overrides Layoutable.MeasureOverride(Size))</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBox_OnApplyTemplate">OnApplyTemplate</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_Primitives_TemplatedControl_OnApplyTemplate">TemplatedControl.OnApplyTemplate(TemplateAppliedEventArgs)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_TemplatedControl_OnAttachedToLogicalTree">OnAttachedToLogicalTree</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBox_OnAttachedToVisualTree">OnAttachedToVisualTree</a></td>
<td><br />(Overrides Visual.OnAttachedToVisualTree(VisualTreeAttachmentEventArgs))</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnAttachedToVisualTreeCore">OnAttachedToVisualTreeCore</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBox_OnCreateAutomationPeer">OnCreateAutomationPeer</a></td>
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
<td><a href="M_Avalonia_Controls_TextBox_OnDetachedFromVisualTree">OnDetachedFromVisualTree</a></td>
<td><br />(Overrides Visual.OnDetachedFromVisualTree(VisualTreeAttachmentEventArgs))</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnDetachedFromVisualTreeCore">OnDetachedFromVisualTreeCore</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBox_OnGotFocus">OnGotFocus</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_Control_OnGotFocus">Control.OnGotFocus(GotFocusEventArgs)</a>)</td>
</tr>
<tr>
<td>OnInitialized</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBox_OnKeyDown">OnKeyDown</a></td>
<td><br />(Overrides InputElement.OnKeyDown(KeyEventArgs))</td>
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
<td><a href="M_Avalonia_Controls_TextBox_OnLostFocus">OnLostFocus</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_Control_OnLostFocus">Control.OnLostFocus(RoutedEventArgs)</a>)</td>
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
<td><a href="M_Avalonia_Controls_TextBox_OnPointerMoved">OnPointerMoved</a></td>
<td><br />(Overrides InputElement.OnPointerMoved(PointerEventArgs))</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBox_OnPointerPressed">OnPointerPressed</a></td>
<td><br />(Overrides InputElement.OnPointerPressed(PointerPressedEventArgs))</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBox_OnPointerReleased">OnPointerReleased</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_Control_OnPointerReleased">Control.OnPointerReleased(PointerReleasedEventArgs)</a>)</td>
</tr>
<tr>
<td>OnPointerWheelChanged</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBox_OnPropertyChanged">OnPropertyChanged</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_Control_OnPropertyChanged">Control.OnPropertyChanged(AvaloniaPropertyChangedEventArgs)</a>)</td>
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
<td><a href="M_Avalonia_Controls_Primitives_TemplatedControl_OnTemplateChanged">OnTemplateChanged</a></td>
<td>Called when the <a href="P_Avalonia_Controls_Primitives_TemplatedControl_Template">Template</a> property changes.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBox_OnTextInput">OnTextInput</a></td>
<td><br />(Overrides InputElement.OnTextInput(TextInputEventArgs))</td>
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
<td><a href="M_Avalonia_Controls_TextBox_Paste">Paste</a></td>
<td>Pastes the current clipboard text content into the TextBox</td>
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
<td><a href="M_Avalonia_Controls_TextBox_Redo">Redo</a></td>
<td>Reapplies the first item on the redo stack</td>
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
<td><a href="M_Avalonia_Controls_TextBox_ScrollToLine">ScrollToLine</a></td>
<td>Scroll the TextBox to the specified line index.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBox_SelectAll">SelectAll</a></td>
<td>Select all text in the TextBox</td>
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
<td><a href="M_Avalonia_Controls_TextBox_Undo">Undo</a></td>
<td>Undoes the first action in the undo stack</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBox_UpdateDataValidation">UpdateDataValidation</a></td>
<td><br />(Overrides AvaloniaObject.UpdateDataValidation(AvaloniaProperty, BindingValueType, Exception))</td>
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
<td><a href="E_Avalonia_Controls_TextBox_CopyingToClipboard">CopyingToClipboard</a></td>
<td>Raised when content is being copied to the clipboard</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_TextBox_CuttingToClipboard">CuttingToClipboard</a></td>
<td>Raised when content is being cut to the clipboard</td>
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
<td><a href="E_Avalonia_Controls_TextBox_PastingFromClipboard">PastingFromClipboard</a></td>
<td>Raised when content is being pasted from the clipboard</td>
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
<td><a href="E_Avalonia_Controls_Primitives_TemplatedControl_TemplateApplied">TemplateApplied</a></td>
<td>Raised when the control's template is applied.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_TextBox_TextChanged">TextChanged</a></td>
<td>Occurs asynchronously after text changes and the new text is rendered.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_TextBox_TextChanging">TextChanging</a></td>
<td>Occurs synchronously when text starts to change but before it is rendered.</td>
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
<td><a href="F_Avalonia_Controls_TextBox_AcceptsReturnProperty">AcceptsReturnProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBox_AcceptsReturn">AcceptsReturn</a> property</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_AcceptsTabProperty">AcceptsTabProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBox_AcceptsTab">AcceptsTab</a> property</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_CanCopyProperty">CanCopyProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBox_CanCopy">CanCopy</a> property</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_CanCutProperty">CanCutProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBox_CanCut">CanCut</a> property</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_CanPasteProperty">CanPasteProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBox_CanPaste">CanPaste</a> property</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_CanRedoProperty">CanRedoProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBox_CanRedo">CanRedo</a> property</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_CanUndoProperty">CanUndoProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBox_CanUndo">CanUndo</a> property</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_CaretBlinkIntervalProperty">CaretBlinkIntervalProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBox_CaretBlinkInterval">CaretBlinkInterval</a> property</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_CaretBrushProperty">CaretBrushProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBox_CaretBrush">CaretBrush</a> property</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_CaretIndexProperty">CaretIndexProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBox_CaretIndex">CaretIndex</a> property</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_ClearSelectionOnLostFocusProperty">ClearSelectionOnLostFocusProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBox_ClearSelectionOnLostFocus">ClearSelectionOnLostFocus</a> property</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_CopyingToClipboardEvent">CopyingToClipboardEvent</a></td>
<td>Defines the <a href="E_Avalonia_Controls_TextBox_CopyingToClipboard">CopyingToClipboard</a> event.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_CuttingToClipboardEvent">CuttingToClipboardEvent</a></td>
<td>Defines the <a href="E_Avalonia_Controls_TextBox_CuttingToClipboard">CuttingToClipboard</a> event.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_HorizontalContentAlignmentProperty">HorizontalContentAlignmentProperty</a></td>
<td>Defines the HorizontalAlignment property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_InnerLeftContentProperty">InnerLeftContentProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBox_InnerLeftContent">InnerLeftContent</a> property</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_InnerRightContentProperty">InnerRightContentProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBox_InnerRightContent">InnerRightContent</a> property</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_IsInactiveSelectionHighlightEnabledProperty">IsInactiveSelectionHighlightEnabledProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBox_IsInactiveSelectionHighlightEnabled">IsInactiveSelectionHighlightEnabled</a> property</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_IsReadOnlyProperty">IsReadOnlyProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBox_IsReadOnly">IsReadOnly</a> property</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_IsUndoEnabledProperty">IsUndoEnabledProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBox_IsUndoEnabled">IsUndoEnabled</a> property</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_LetterSpacingProperty">LetterSpacingProperty</a></td>
<td>Defines see <a href="P_Avalonia_Controls_TextBlock_LetterSpacing">LetterSpacing</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_LineHeightProperty">LineHeightProperty</a></td>
<td>Defines see <a href="P_Avalonia_Controls_Presenters_TextPresenter_LineHeight">LineHeight</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_MaxLengthProperty">MaxLengthProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBox_MaxLength">MaxLength</a> property</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_MaxLinesProperty">MaxLinesProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBox_MaxLines">MaxLines</a> property</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_MinLinesProperty">MinLinesProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBox_MinLines">MinLines</a> property</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_NewLineProperty">NewLineProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBox_NewLine">NewLine</a> property</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_PasswordCharProperty">PasswordCharProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBox_PasswordChar">PasswordChar</a> property</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_PastingFromClipboardEvent">PastingFromClipboardEvent</a></td>
<td>Defines the <a href="E_Avalonia_Controls_TextBox_PastingFromClipboard">PastingFromClipboard</a> event.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_RevealPasswordProperty">RevealPasswordProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBox_RevealPassword">RevealPassword</a> property</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_SelectionBrushProperty">SelectionBrushProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBox_SelectionBrush">SelectionBrush</a> property</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_SelectionEndProperty">SelectionEndProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBox_SelectionEnd">SelectionEnd</a> property</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_SelectionForegroundBrushProperty">SelectionForegroundBrushProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBox_SelectionForegroundBrush">SelectionForegroundBrush</a> property</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_SelectionStartProperty">SelectionStartProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBox_SelectionStart">SelectionStart</a> property</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_TextAlignmentProperty">TextAlignmentProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBox_TextAlignment">TextAlignment</a> property</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_TextChangedEvent">TextChangedEvent</a></td>
<td>Defines the <a href="E_Avalonia_Controls_TextBox_TextChanged">TextChanged</a> event.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_TextChangingEvent">TextChangingEvent</a></td>
<td>Defines the <a href="E_Avalonia_Controls_TextBox_TextChanging">TextChanging</a> event.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_TextProperty">TextProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBox_Text">Text</a> property</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_TextWrappingProperty">TextWrappingProperty</a></td>
<td> </td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_UndoLimitProperty">UndoLimitProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBox_UndoLimit">UndoLimit</a> property</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_UseFloatingWatermarkProperty">UseFloatingWatermarkProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBox_UseFloatingWatermark">UseFloatingWatermark</a> property</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_VerticalContentAlignmentProperty">VerticalContentAlignmentProperty</a></td>
<td>Defines the VerticalAlignment property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_WatermarkProperty">WatermarkProperty</a></td>
<td>Defines the <a href="P_Avalonia_Controls_TextBox_Watermark">Watermark</a> property</td>
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
