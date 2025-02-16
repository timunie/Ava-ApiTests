---
title:TextBox Class
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# TextBox Class




## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.4

**C#**
``` C#
[TemplatePartAttribute("PART_TextPresenter", typeof(TextPresenter), IsRequired = true)]
[TemplatePartAttribute("PART_ScrollViewer", typeof(ScrollViewer))]
[PseudoClassesAttribute(new string[] { ... })]
public class TextBox : TemplatedControl
```
**VB**
``` VB
<TemplatePartAttribute("PART_TextPresenter", GetType(TextPresenter), IsRequired := true)>
<TemplatePartAttribute("PART_ScrollViewer", GetType(ScrollViewer))>
<PseudoClassesAttribute(New String() { ... })>
Public Class TextBox
	Inherits TemplatedControl
```
**F#**
``` F#
[<TemplatePartAttribute("PART_TextPresenter", typeof(TextPresenter), IsRequired = true)>]
[<TemplatePartAttribute("PART_ScrollViewer", typeof(ScrollViewer))>]
[<PseudoClassesAttribute(new string[] { ... })>]
type TextBox = 
    class
        inherit TemplatedControl
    end
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>  →  <a href="T_Avalonia_Animation_Animatable">Animatable</a>  →  <a href="T_Avalonia_StyledElement">StyledElement</a>  →  <a href="T_Avalonia_Visual">Visual</a>  →  <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>  →  <a href="T_Avalonia_Interactivity_Interactive">Interactive</a>  →  <a href="T_Avalonia_Input_InputElement">InputElement</a>  →  <a href="T_Avalonia_Controls_Control">Control</a>  →  <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>  →  TextBox</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_Controls_MaskedTextBox">Avalonia.Controls.MaskedTextBox</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_TextBox__ctor">TextBox()</a></td>
<td>Initializes a new instance of the TextBox class</td></tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_AcceptsReturn">AcceptsReturn</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_AcceptsTab">AcceptsTab</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_StyledElement_ActualThemeVariant">ActualThemeVariant</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_Background">Background</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_BackgroundSizing">BackgroundSizing</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_BorderBrush">BorderBrush</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_BorderThickness">BorderThickness</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Visual_Bounds">Bounds</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Visual_BypassFlowDirectionPolicies">BypassFlowDirectionPolicies</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_CanCopy">CanCopy</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_CanCut">CanCut</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_CanPaste">CanPaste</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_CanRedo">CanRedo</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_CanUndo">CanUndo</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_CaretBlinkInterval">CaretBlinkInterval</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_CaretBrush">CaretBrush</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_CaretIndex">CaretIndex</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_StyledElement_Classes">Classes</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_ClearSelectionOnLostFocus">ClearSelectionOnLostFocus</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Visual_Clip">Clip</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Visual_ClipToBounds">ClipToBounds</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_Control_ContextFlyout">ContextFlyout</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_Control_ContextMenu">ContextMenu</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_CopyGesture">CopyGesture</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_CornerRadius">CornerRadius</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Input_InputElement_Cursor">Cursor</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_CutGesture">CutGesture</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_StyledElement_DataContext">DataContext</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_Control_DataTemplates">DataTemplates</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Layout_Layoutable_DesiredSize">DesiredSize</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Visual_Effect">Effect</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Visual_FlowDirection">FlowDirection</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Input_InputElement_Focusable">Focusable</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_Control_FocusAdorner">FocusAdorner</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_FontFamily">FontFamily</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_FontFeatures">FontFeatures</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_FontSize">FontSize</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_FontStretch">FontStretch</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_FontStyle">FontStyle</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_FontWeight">FontWeight</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_Foreground">Foreground</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Input_InputElement_GestureRecognizers">GestureRecognizers</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Visual_HasMirrorTransform">HasMirrorTransform</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Layout_Layoutable_Height">Height</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Layout_Layoutable_HorizontalAlignment">HorizontalAlignment</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_HorizontalContentAlignment">HorizontalContentAlignment</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_AvaloniaObject_InheritanceParent">InheritanceParent</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_InnerLeftContent">InnerLeftContent</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_InnerRightContent">InnerRightContent</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Layout_Layoutable_IsArrangeValid">IsArrangeValid</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Input_InputElement_IsEffectivelyEnabled">IsEffectivelyEnabled</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Visual_IsEffectivelyVisible">IsEffectivelyVisible</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Input_InputElement_IsEnabled">IsEnabled</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Input_InputElement_IsEnabledCore">IsEnabledCore</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Input_InputElement_IsFocused">IsFocused</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Input_InputElement_IsHitTestVisible">IsHitTestVisible</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_IsInactiveSelectionHighlightEnabled">IsInactiveSelectionHighlightEnabled</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_StyledElement_IsInitialized">IsInitialized</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Input_InputElement_IsKeyboardFocusWithin">IsKeyboardFocusWithin</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_Control_IsLoaded">IsLoaded</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Layout_Layoutable_IsMeasureValid">IsMeasureValid</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Input_InputElement_IsPointerOver">IsPointerOver</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_IsReadOnly">IsReadOnly</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Input_InputElement_IsTabStop">IsTabStop</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_IsUndoEnabled">IsUndoEnabled</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Visual_IsVisible">IsVisible</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_AvaloniaObject_Item">Item(AvaloniaProperty)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_AvaloniaObject_Item_1">Item(IndexerDescriptor)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Input_InputElement_KeyBindings">KeyBindings</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_LetterSpacing">LetterSpacing</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_LineHeight">LineHeight</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_StyledElement_LogicalChildren">LogicalChildren</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Layout_Layoutable_Margin">Margin</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Layout_Layoutable_MaxHeight">MaxHeight</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_MaxLength">MaxLength</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_MaxLines">MaxLines</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Layout_Layoutable_MaxWidth">MaxWidth</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Layout_Layoutable_MinHeight">MinHeight</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_MinLines">MinLines</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Layout_Layoutable_MinWidth">MinWidth</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_StyledElement_Name">Name</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_NewLine">NewLine</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Visual_Opacity">Opacity</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Visual_OpacityMask">OpacityMask</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_Padding">Padding</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_StyledElement_Parent">Parent</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_PasswordChar">PasswordChar</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_PasteGesture">PasteGesture</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_StyledElement_PseudoClasses">PseudoClasses</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Visual_RenderTransform">RenderTransform</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Visual_RenderTransformOrigin">RenderTransformOrigin</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_StyledElement_Resources">Resources</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_RevealPassword">RevealPassword</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_SelectedText">SelectedText</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_SelectionBrush">SelectionBrush</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_SelectionEnd">SelectionEnd</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_SelectionForegroundBrush">SelectionForegroundBrush</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_SelectionStart">SelectionStart</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_StyledElement_StyleKey">StyleKey</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_StyledElement_StyleKeyOverride">StyleKeyOverride</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_StyledElement_Styles">Styles</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Input_InputElement_TabIndex">TabIndex</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_Control_Tag">Tag</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_Template">Template</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_StyledElement_TemplatedParent">TemplatedParent</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_Text">Text</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_TextAlignment">TextAlignment</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_TextWrapping">TextWrapping</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_StyledElement_Theme">Theme</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Animation_Animatable_Transitions">Transitions</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Animation_Animatable">Animatable</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_UndoLimit">UndoLimit</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_UseFloatingWatermark">UseFloatingWatermark</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Layout_Layoutable_UseLayoutRounding">UseLayoutRounding</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Layout_Layoutable_VerticalAlignment">VerticalAlignment</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_VerticalContentAlignment">VerticalContentAlignment</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Visual_VisualChildren">VisualChildren</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Visual_VisualRoot">VisualRoot</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TextBox_Watermark">Watermark</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Layout_Layoutable_Width">Width</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Visual_ZIndex">ZIndex</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Interactivity_Interactive_AddHandler">AddHandler(RoutedEvent, Delegate, RoutingStrategies, Boolean)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Interactivity_Interactive">Interactive</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Interactivity_Interactive_AddHandler__1">AddHandler(TEventArgs)(RoutedEvent(TEventArgs), EventHandler(TEventArgs), RoutingStrategies, Boolean)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Interactivity_Interactive">Interactive</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_StyledElement_ApplyStyling">ApplyStyling()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_TemplatedControl_ApplyTemplate">ApplyTemplate()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Layout_Layoutable_Arrange">Arrange(Rect)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Layout_Layoutable_ArrangeCore">ArrangeCore(Rect)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Layout_Layoutable_ArrangeOverride">ArrangeOverride(Size)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_StyledElement_BeginInit">BeginInit()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Bind">Bind(AvaloniaProperty, IBinding)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Bind_1">Bind(AvaloniaProperty, IObservable(Object), BindingPriority)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Bind__1_2">Bind(T)(DirectPropertyBase(T), IObservable(T))</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Bind__1">Bind(T)(DirectPropertyBase(T), IObservable(BindingValue(T)))</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Bind__1_1">Bind(T)(DirectPropertyBase(T), IObservable(Object))</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Bind__1_5">Bind(T)(StyledProperty(T), IObservable(T), BindingPriority)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Bind__1_3">Bind(T)(StyledProperty(T), IObservable(BindingValue(T)), BindingPriority)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Bind__1_4">Bind(T)(StyledProperty(T), IObservable(Object), BindingPriority)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Interactivity_Interactive_BuildEventRoute">BuildEventRoute(RoutedEvent)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Interactivity_Interactive">Interactive</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_CheckAccess">CheckAccess()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBox_Clear">Clear()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBox_ClearSelection">ClearSelection()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_ClearValue">ClearValue(AvaloniaProperty)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_ClearValue__1">ClearValue(T)(AvaloniaProperty(T))</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_ClearValue__1_1">ClearValue(T)(DirectPropertyBase(T))</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_ClearValue__1_2">ClearValue(T)(StyledProperty(T))</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBox_CoerceText">CoerceText(String)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_CoerceValue">CoerceValue(AvaloniaProperty)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBox_Copy">Copy()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBox_Cut">Cut()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_StyledElement_EndInit">EndInit()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Equals">Equals(Object)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Input_InputElement_Focus">Focus(NavigationMethod, KeyModifiers)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_GetBaseValue__1">GetBaseValue(T)(StyledProperty(T))</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_GetHashCode">GetHashCode()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_TemplatedControl_GetTemplateFocusTarget">GetTemplateFocusTarget()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_GetValue">GetValue(AvaloniaProperty)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_GetValue__1">GetValue(T)(DirectPropertyBase(T))</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_GetValue__1_1">GetValue(T)(StyledProperty(T))</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_StyledElement_InitializeIfNeeded">InitializeIfNeeded()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Layout_Layoutable_InvalidateArrange">InvalidateArrange()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Layout_Layoutable_InvalidateMeasure">InvalidateMeasure()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Visual_InvalidateMirrorTransform">InvalidateMirrorTransform()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Visual_InvalidateVisual">InvalidateVisual()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_IsAnimating">IsAnimating(AvaloniaProperty)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_IsSet">IsSet(AvaloniaProperty)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Visual_LogicalChildrenCollectionChanged">LogicalChildrenCollectionChanged(Object, NotifyCollectionChangedEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Layout_Layoutable_Measure">Measure(Size)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Layout_Layoutable_MeasureCore">MeasureCore(Size)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBox_MeasureOverride">MeasureOverride(Size)</a></td>
<td><br />(Overrides <a href="M_Avalonia_Layout_Layoutable_MeasureOverride">Layoutable.MeasureOverride(Size)</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBox_OnApplyTemplate">OnApplyTemplate(TemplateAppliedEventArgs)</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_Primitives_TemplatedControl_OnApplyTemplate">TemplatedControl.OnApplyTemplate(TemplateAppliedEventArgs)</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_TemplatedControl_OnAttachedToLogicalTree">OnAttachedToLogicalTree(LogicalTreeAttachmentEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBox_OnAttachedToVisualTree">OnAttachedToVisualTree(VisualTreeAttachmentEventArgs)</a></td>
<td><br />(Overrides <a href="M_Avalonia_Visual_OnAttachedToVisualTree">Visual.OnAttachedToVisualTree(VisualTreeAttachmentEventArgs)</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnAttachedToVisualTreeCore">OnAttachedToVisualTreeCore(VisualTreeAttachmentEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBox_OnCreateAutomationPeer">OnCreateAutomationPeer()</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_Control_OnCreateAutomationPeer">Control.OnCreateAutomationPeer()</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_StyledElement_OnDataContextBeginUpdate">OnDataContextBeginUpdate()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_StyledElement_OnDataContextChanged">OnDataContextChanged(EventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_StyledElement_OnDataContextEndUpdate">OnDataContextEndUpdate()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_TemplatedControl_OnDetachedFromLogicalTree">OnDetachedFromLogicalTree(LogicalTreeAttachmentEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBox_OnDetachedFromVisualTree">OnDetachedFromVisualTree(VisualTreeAttachmentEventArgs)</a></td>
<td><br />(Overrides <a href="M_Avalonia_Visual_OnDetachedFromVisualTree">Visual.OnDetachedFromVisualTree(VisualTreeAttachmentEventArgs)</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnDetachedFromVisualTreeCore">OnDetachedFromVisualTreeCore(VisualTreeAttachmentEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBox_OnGotFocus">OnGotFocus(GotFocusEventArgs)</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_Control_OnGotFocus">Control.OnGotFocus(GotFocusEventArgs)</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_StyledElement_OnInitialized">OnInitialized()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBox_OnKeyDown">OnKeyDown(KeyEventArgs)</a></td>
<td><br />(Overrides <a href="M_Avalonia_Input_InputElement_OnKeyDown">InputElement.OnKeyDown(KeyEventArgs)</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnKeyUp">OnKeyUp(KeyEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnLoaded">OnLoaded(RoutedEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBox_OnLostFocus">OnLostFocus(RoutedEventArgs)</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_Control_OnLostFocus">Control.OnLostFocus(RoutedEventArgs)</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Layout_Layoutable_OnMeasureInvalidated">OnMeasureInvalidated()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Input_InputElement_OnPointerCaptureLost">OnPointerCaptureLost(PointerCaptureLostEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Input_InputElement_OnPointerEntered">OnPointerEntered(PointerEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Input_InputElement_OnPointerExited">OnPointerExited(PointerEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBox_OnPointerMoved">OnPointerMoved(PointerEventArgs)</a></td>
<td><br />(Overrides <a href="M_Avalonia_Input_InputElement_OnPointerMoved">InputElement.OnPointerMoved(PointerEventArgs)</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBox_OnPointerPressed">OnPointerPressed(PointerPressedEventArgs)</a></td>
<td><br />(Overrides <a href="M_Avalonia_Input_InputElement_OnPointerPressed">InputElement.OnPointerPressed(PointerPressedEventArgs)</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBox_OnPointerReleased">OnPointerReleased(PointerReleasedEventArgs)</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_Control_OnPointerReleased">Control.OnPointerReleased(PointerReleasedEventArgs)</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Input_InputElement_OnPointerWheelChanged">OnPointerWheelChanged(PointerWheelEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBox_OnPropertyChanged">OnPropertyChanged(AvaloniaPropertyChangedEventArgs)</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_Control_OnPropertyChanged">Control.OnPropertyChanged(AvaloniaPropertyChangedEventArgs)</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Animation_Animatable_OnPropertyChangedCore">OnPropertyChangedCore(AvaloniaPropertyChangedEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Animation_Animatable">Animatable</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnSizeChanged">OnSizeChanged(SizeChangedEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_TemplatedControl_OnTemplateChanged">OnTemplateChanged(AvaloniaPropertyChangedEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBox_OnTextInput">OnTextInput(TextInputEventArgs)</a></td>
<td><br />(Overrides <a href="M_Avalonia_Input_InputElement_OnTextInput">InputElement.OnTextInput(TextInputEventArgs)</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnUnloaded">OnUnloaded(RoutedEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Layout_Layoutable_OnVisualParentChanged">OnVisualParentChanged(Visual, Visual)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBox_Paste">Paste()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Interactivity_Interactive_RaiseEvent">RaiseEvent(RoutedEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Interactivity_Interactive">Interactive</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_RaisePropertyChanged__1">RaisePropertyChanged(T)(DirectPropertyBase(T), T, T)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBox_Redo">Redo()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Interactivity_Interactive_RemoveHandler">RemoveHandler(RoutedEvent, Delegate)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Interactivity_Interactive">Interactive</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Interactivity_Interactive_RemoveHandler__1">RemoveHandler(TEventArgs)(RoutedEvent(TEventArgs), EventHandler(TEventArgs))</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Interactivity_Interactive">Interactive</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Visual_Render">Render(DrawingContext)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBox_ScrollToLine">ScrollToLine(Int32)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBox_SelectAll">SelectAll()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_SetAndRaise__1">SetAndRaise(T)(DirectPropertyBase(T), T, T)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_SetCurrentValue">SetCurrentValue(AvaloniaProperty, Object)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_SetCurrentValue__1">SetCurrentValue(T)(StyledProperty(T), T)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_SetValue">SetValue(AvaloniaProperty, Object, BindingPriority)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_SetValue__1">SetValue(T)(DirectPropertyBase(T), T)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_SetValue__1_1">SetValue(T)(StyledProperty(T), T, BindingPriority)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_StyledElement_TryGetResource">TryGetResource(Object, ThemeVariant, Object)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBox_Undo">Undo()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Controls_TextBox_UpdateDataValidation">UpdateDataValidation(AvaloniaProperty, BindingValueType, Exception)</a></td>
<td><br />(Overrides <a href="M_Avalonia_AvaloniaObject_UpdateDataValidation">AvaloniaObject.UpdateDataValidation(AvaloniaProperty, BindingValueType, Exception)</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Input_InputElement_UpdateIsEffectivelyEnabled">UpdateIsEffectivelyEnabled()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Layout_Layoutable_UpdateLayout">UpdateLayout()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_VerifyAccess">VerifyAccess()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_StyledElement_ActualThemeVariantChanged">ActualThemeVariantChanged</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_StyledElement_AttachedToLogicalTree">AttachedToLogicalTree</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_Visual_AttachedToVisualTree">AttachedToVisualTree</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_Controls_Control_ContextRequested">ContextRequested</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_Controls_TextBox_CopyingToClipboard">CopyingToClipboard</a></td>
<td> </td></tr>
<tr>
<td><a href="E_Avalonia_Controls_TextBox_CuttingToClipboard">CuttingToClipboard</a></td>
<td> </td></tr>
<tr>
<td><a href="E_Avalonia_StyledElement_DataContextChanged">DataContextChanged</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_StyledElement_DetachedFromLogicalTree">DetachedFromLogicalTree</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_Visual_DetachedFromVisualTree">DetachedFromVisualTree</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_DoubleTapped">DoubleTapped</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_Layout_Layoutable_EffectiveViewportChanged">EffectiveViewportChanged</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_GotFocus">GotFocus</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_Holding">Holding</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_StyledElement_Initialized">Initialized</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_KeyDown">KeyDown</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_KeyUp">KeyUp</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_Layout_Layoutable_LayoutUpdated">LayoutUpdated</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_Controls_Control_Loaded">Loaded</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_LostFocus">LostFocus</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_Controls_TextBox_PastingFromClipboard">PastingFromClipboard</a></td>
<td> </td></tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_PointerCaptureLost">PointerCaptureLost</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_PointerEntered">PointerEntered</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_PointerExited">PointerExited</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_PointerMoved">PointerMoved</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_PointerPressed">PointerPressed</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_PointerReleased">PointerReleased</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_PointerWheelChanged">PointerWheelChanged</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_AvaloniaObject_PropertyChanged">PropertyChanged</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_StyledElement_ResourcesChanged">ResourcesChanged</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_Controls_Control_SizeChanged">SizeChanged</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_Tapped">Tapped</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_Controls_Primitives_TemplatedControl_TemplateApplied">TemplateApplied</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_Controls_TextBox_TextChanged">TextChanged</a></td>
<td> </td></tr>
<tr>
<td><a href="E_Avalonia_Controls_TextBox_TextChanging">TextChanging</a></td>
<td> </td></tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_TextInput">TextInput</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_Input_InputElement_TextInputMethodClientRequested">TextInputMethodClientRequested</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_Controls_Control_Unloaded">Unloaded</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td></tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_AcceptsReturnProperty">AcceptsReturnProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_AcceptsTabProperty">AcceptsTabProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_CanCopyProperty">CanCopyProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_CanCutProperty">CanCutProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_CanPasteProperty">CanPasteProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_CanRedoProperty">CanRedoProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_CanUndoProperty">CanUndoProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_CaretBlinkIntervalProperty">CaretBlinkIntervalProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_CaretBrushProperty">CaretBrushProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_CaretIndexProperty">CaretIndexProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_ClearSelectionOnLostFocusProperty">ClearSelectionOnLostFocusProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_CopyingToClipboardEvent">CopyingToClipboardEvent</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_CuttingToClipboardEvent">CuttingToClipboardEvent</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_HorizontalContentAlignmentProperty">HorizontalContentAlignmentProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_InnerLeftContentProperty">InnerLeftContentProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_InnerRightContentProperty">InnerRightContentProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_IsInactiveSelectionHighlightEnabledProperty">IsInactiveSelectionHighlightEnabledProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_IsReadOnlyProperty">IsReadOnlyProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_IsUndoEnabledProperty">IsUndoEnabledProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_LetterSpacingProperty">LetterSpacingProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_LineHeightProperty">LineHeightProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_MaxLengthProperty">MaxLengthProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_MaxLinesProperty">MaxLinesProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_MinLinesProperty">MinLinesProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_NewLineProperty">NewLineProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_PasswordCharProperty">PasswordCharProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_PastingFromClipboardEvent">PastingFromClipboardEvent</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_RevealPasswordProperty">RevealPasswordProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_SelectionBrushProperty">SelectionBrushProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_SelectionEndProperty">SelectionEndProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_SelectionForegroundBrushProperty">SelectionForegroundBrushProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_SelectionStartProperty">SelectionStartProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_TextAlignmentProperty">TextAlignmentProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_TextChangedEvent">TextChangedEvent</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_TextChangingEvent">TextChangingEvent</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_TextProperty">TextProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_TextWrappingProperty">TextWrappingProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_UndoLimitProperty">UndoLimitProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_UseFloatingWatermarkProperty">UseFloatingWatermarkProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_VerticalContentAlignmentProperty">VerticalContentAlignmentProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TextBox_WatermarkProperty">WatermarkProperty</a></td>
<td> </td></tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Interactivity_InteractiveExtensions_AddDisposableHandler__1">AddDisposableHandler(TEventArgs)(RoutedEvent(TEventArgs), EventHandler(TEventArgs), RoutingStrategies, Boolean)</a></td>
<td><br />(Defined by <a href="T_Avalonia_Interactivity_InteractiveExtensions">InteractiveExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_Bind">Bind(AvaloniaProperty, IBinding, Object)</a></td>
<td><br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_Bind__1">Bind(T)(AvaloniaProperty(T), IObservable(BindingValue(T)), BindingPriority)</a></td>
<td><br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_Bind__1_1">Bind(T)(AvaloniaProperty(T), IObservable(T), BindingPriority)</a></td>
<td><br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_StyledElementExtensions_BindClass">BindClass(String, IBinding, Object)</a></td>
<td><br />(Defined by <a href="T_Avalonia_StyledElementExtensions">StyledElementExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_ControlExtensions_BringIntoView_1">BringIntoView()</a></td>
<td><br />(Defined by <a href="T_Avalonia_Controls_ControlExtensions">ControlExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_ControlExtensions_BringIntoView">BringIntoView(Rect)</a></td>
<td><br />(Defined by <a href="T_Avalonia_Controls_ControlExtensions">ControlExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_CalculateDistanceFromAncestor">CalculateDistanceFromAncestor(Visual)</a></td>
<td><br />(Defined by <a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_FindAncestorOfType__1">FindAncestorOfType(T)(Boolean)</a></td>
<td><br />(Defined by <a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_FindCommonVisualAncestor">FindCommonVisualAncestor(Visual)</a></td>
<td><br />(Defined by <a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_ControlExtensions_FindControl__1">FindControl(T)(String)</a></td>
<td><br />(Defined by <a href="T_Avalonia_Controls_ControlExtensions">ControlExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_Templates_DataTemplateExtensions_FindDataTemplate">FindDataTemplate(Object, IDataTemplate)</a></td>
<td><br />(Defined by <a href="T_Avalonia_Controls_Templates_DataTemplateExtensions">DataTemplateExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_FindDescendantOfType__1">FindDescendantOfType(T)(Boolean)</a></td>
<td><br />(Defined by <a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetBaseValue">GetBaseValue(AvaloniaProperty)</a></td>
<td><br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetBaseValue__1">GetBaseValue(T)(AvaloniaProperty(T))</a></td>
<td><br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetBindingObservable">GetBindingObservable(AvaloniaProperty)</a></td>
<td><br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetBindingObservable__1_1">GetBindingObservable(T)(AvaloniaProperty(T))</a></td>
<td><br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetBindingObservable__1">GetBindingObservable(TResult)(AvaloniaProperty, Func(Object, TResult))</a></td>
<td><br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetBindingObservable__2">GetBindingObservable(TSource, TResult)(AvaloniaProperty(TSource), Func(TSource, TResult))</a></td>
<td><br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_ControlExtensions_GetControl__1">GetControl(T)(String)</a></td>
<td><br />(Defined by <a href="T_Avalonia_Controls_ControlExtensions">ControlExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Diagnostics_AvaloniaObjectExtensions_GetDiagnostic">GetDiagnostic(AvaloniaProperty)</a></td>
<td><br />(Defined by <a href="T_Avalonia_Diagnostics_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Interactivity_InteractiveExtensions_GetInteractiveParent">GetInteractiveParent()</a></td>
<td><br />(Defined by <a href="T_Avalonia_Interactivity_InteractiveExtensions">InteractiveExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetObservable">GetObservable(AvaloniaProperty)</a></td>
<td><br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetObservable__1_1">GetObservable(T)(AvaloniaProperty(T))</a></td>
<td><br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetObservable__1">GetObservable(TResult)(AvaloniaProperty, Func(Object, TResult))</a></td>
<td><br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Interactivity_InteractiveExtensions_GetObservable__1">GetObservable(TEventArgs)(RoutedEvent(TEventArgs), RoutingStrategies, Boolean)</a></td>
<td><br />(Defined by <a href="T_Avalonia_Interactivity_InteractiveExtensions">InteractiveExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetObservable__2">GetObservable(TSource, TResult)(AvaloniaProperty(TSource), Func(TSource, TResult))</a></td>
<td><br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetPropertyChangedObservable">GetPropertyChangedObservable(AvaloniaProperty)</a></td>
<td><br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_GetSelfAndVisualAncestors">GetSelfAndVisualAncestors()</a></td>
<td><br />(Defined by <a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_GetSelfAndVisualDescendants">GetSelfAndVisualDescendants()</a></td>
<td><br />(Defined by <a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Diagnostics_StyledElementExtensions_GetStyleDiagnostics">GetStyleDiagnostics()</a></td>
<td><br />(Defined by <a href="T_Avalonia_Diagnostics_StyledElementExtensions">StyledElementExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_Templates_TemplateExtensions_GetTemplateChildren">GetTemplateChildren()</a></td>
<td><br />(Defined by <a href="T_Avalonia_Controls_Templates_TemplateExtensions">TemplateExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_GetTransformedBounds">GetTransformedBounds()</a></td>
<td><br />(Defined by <a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetValue__1">GetValue(T)(AvaloniaProperty(T))</a></td>
<td><br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Diagnostics_AvaloniaObjectExtensions_GetValueStoreDiagnostic">GetValueStoreDiagnostic()</a></td>
<td><br />(Defined by <a href="T_Avalonia_Diagnostics_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_GetVisualAncestors">GetVisualAncestors()</a></td>
<td><br />(Defined by <a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_GetVisualAt_1">GetVisualAt(Point)</a></td>
<td><br />(Defined by <a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_GetVisualAt">GetVisualAt(Point, Func(Visual, Boolean))</a></td>
<td><br />(Defined by <a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_GetVisualChildren">GetVisualChildren()</a></td>
<td><br />(Defined by <a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_GetVisualDescendants">GetVisualDescendants()</a></td>
<td><br />(Defined by <a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_GetVisualParent">GetVisualParent()</a></td>
<td><br />(Defined by <a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_GetVisualParent__1">GetVisualParent(T)()</a></td>
<td><br />(Defined by <a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_GetVisualRoot">GetVisualRoot()</a></td>
<td><br />(Defined by <a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_GetVisualsAt_1">GetVisualsAt(Point)</a></td>
<td><br />(Defined by <a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_GetVisualsAt">GetVisualsAt(Point, Func(Visual, Boolean))</a></td>
<td><br />(Defined by <a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_IsAttachedToVisualTree">IsAttachedToVisualTree()</a></td>
<td><br />(Defined by <a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_IsVisualAncestorOf">IsVisualAncestorOf(Visual)</a></td>
<td><br />(Defined by <a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_VisualExtensions_PointToClient">PointToClient(PixelPoint)</a></td>
<td><br />(Defined by <a href="T_Avalonia_VisualExtensions">VisualExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_VisualExtensions_PointToScreen">PointToScreen(Point)</a></td>
<td><br />(Defined by <a href="T_Avalonia_VisualExtensions">VisualExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_VisualExtensions_TransformToVisual">TransformToVisual(Visual)</a></td>
<td><br />(Defined by <a href="T_Avalonia_VisualExtensions">VisualExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_VisualExtensions_TranslatePoint">TranslatePoint(Point, Visual)</a></td>
<td><br />(Defined by <a href="T_Avalonia_VisualExtensions">VisualExtensions</a>)</td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
