---
title:TopLevel Class
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# TopLevel Class




## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.4

**C#**
``` C#
[TemplatePartAttribute("PART_TransparencyFallback", typeof(Border))]
public abstract class TopLevel : ContentControl, 
	IInputRoot, IInputElement, ILayoutRoot, IRenderRoot, ICloseable, 
	IStyleHost, ILogicalRoot, ILogical, ITextInputMethodRoot
```
**VB**
``` VB
<TemplatePartAttribute("PART_TransparencyFallback", GetType(Border))>
Public MustInherit Class TopLevel
	Inherits ContentControl
	Implements IInputRoot, IInputElement, ILayoutRoot, IRenderRoot, 
	ICloseable, IStyleHost, ILogicalRoot, ILogical, ITextInputMethodRoot
```
**F#**
``` F#
[<AbstractClassAttribute>]
[<TemplatePartAttribute("PART_TransparencyFallback", typeof(Border))>]
type TopLevel = 
    class
        inherit ContentControl
        interface IInputRoot
        interface IInputElement
        interface ILayoutRoot
        interface IRenderRoot
        interface ICloseable
        interface IStyleHost
        interface ILogicalRoot
        interface ILogical
        interface ITextInputMethodRoot
    end
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>  →  <a href="T_Avalonia_Animation_Animatable">Animatable</a>  →  <a href="T_Avalonia_StyledElement">StyledElement</a>  →  <a href="T_Avalonia_Visual">Visual</a>  →  <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>  →  <a href="T_Avalonia_Interactivity_Interactive">Interactive</a>  →  <a href="T_Avalonia_Input_InputElement">InputElement</a>  →  <a href="T_Avalonia_Controls_Control">Control</a>  →  <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>  →  <a href="T_Avalonia_Controls_ContentControl">ContentControl</a>  →  TopLevel</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_Controls_Embedding_EmbeddableControlRoot">Avalonia.Controls.Embedding.EmbeddableControlRoot</a><br /><a href="T_Avalonia_Controls_WindowBase">Avalonia.Controls.WindowBase</a></td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Input_ICloseable">ICloseable</a>, <a href="T_Avalonia_Input_IInputElement">IInputElement</a>, <a href="T_Avalonia_Input_IInputRoot">IInputRoot</a>, <a href="T_Avalonia_Input_TextInput_ITextInputMethodRoot">ITextInputMethodRoot</a>, <a href="T_Avalonia_Layout_ILayoutRoot">ILayoutRoot</a>, <a href="T_Avalonia_LogicalTree_ILogical">ILogical</a>, <a href="T_Avalonia_LogicalTree_ILogicalRoot">ILogicalRoot</a>, <a href="T_Avalonia_Rendering_IRenderRoot">IRenderRoot</a>, <a href="T_Avalonia_Styling_IStyleHost">IStyleHost</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_TopLevel__ctor_1">TopLevel(ITopLevelImpl)</a></td>
<td>Initializes a new instance of the TopLevel class</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_TopLevel__ctor">TopLevel(ITopLevelImpl, IAvaloniaDependencyResolver)</a></td>
<td>Initializes a new instance of the TopLevel class</td></tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_StyledElement_ActualThemeVariant">ActualThemeVariant</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TopLevel_ActualTransparencyLevel">ActualTransparencyLevel</a></td>
<td> </td></tr>
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
<td><a href="P_Avalonia_Controls_TopLevel_BypassFlowDirectionPolicies">BypassFlowDirectionPolicies</a></td>
<td><br />(Overrides <a href="P_Avalonia_Visual_BypassFlowDirectionPolicies">Visual.BypassFlowDirectionPolicies</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_StyledElement_Classes">Classes</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TopLevel_ClientSize">ClientSize</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Visual_Clip">Clip</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TopLevel_Clipboard">Clipboard</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Visual_ClipToBounds">ClipToBounds</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_ContentControl_Content">Content</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_ContentControl">ContentControl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_ContentControl_ContentTemplate">ContentTemplate</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_ContentControl">ContentControl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_Control_ContextFlyout">ContextFlyout</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_Control_ContextMenu">ContextMenu</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_TemplatedControl_CornerRadius">CornerRadius</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Input_InputElement_Cursor">Cursor</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td></tr>
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
<td><a href="P_Avalonia_Controls_TopLevel_FocusManager">FocusManager</a></td>
<td> </td></tr>
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
<td><a href="P_Avalonia_Controls_TopLevel_FrameSize">FrameSize</a></td>
<td> </td></tr>
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
<td><a href="P_Avalonia_Controls_ContentControl_HorizontalContentAlignment">HorizontalContentAlignment</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_ContentControl">ContentControl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_AvaloniaObject_InheritanceParent">InheritanceParent</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TopLevel_InputPane">InputPane</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TopLevel_InsetsManager">InsetsManager</a></td>
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
<td><a href="P_Avalonia_Input_InputElement_IsTabStop">IsTabStop</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td></tr>
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
<td><a href="P_Avalonia_Controls_TopLevel_Launcher">Launcher</a></td>
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
<td><a href="P_Avalonia_Layout_Layoutable_MaxWidth">MaxWidth</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Layout_Layoutable_MinHeight">MinHeight</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Layout_Layoutable_MinWidth">MinWidth</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_StyledElement_Name">Name</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td></tr>
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
<td><a href="P_Avalonia_Controls_TopLevel_PlatformImpl">PlatformImpl</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TopLevel_PlatformSettings">PlatformSettings</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Controls_ContentControl_Presenter">Presenter</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_ContentControl">ContentControl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_StyledElement_PseudoClasses">PseudoClasses</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TopLevel_RendererDiagnostics">RendererDiagnostics</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TopLevel_RenderScaling">RenderScaling</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Visual_RenderTransform">RenderTransform</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Visual_RenderTransformOrigin">RenderTransformOrigin</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TopLevel_RequestedThemeVariant">RequestedThemeVariant</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_StyledElement_Resources">Resources</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TopLevel_Screens">Screens</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TopLevel_StorageProvider">StorageProvider</a></td>
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
<td><a href="P_Avalonia_StyledElement_Theme">Theme</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Animation_Animatable_Transitions">Transitions</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Animation_Animatable">Animatable</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TopLevel_TransparencyBackgroundFallback">TransparencyBackgroundFallback</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Controls_TopLevel_TransparencyLevelHint">TransparencyLevelHint</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Layout_Layoutable_UseLayoutRounding">UseLayoutRounding</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Layout_Layoutable_VerticalAlignment">VerticalAlignment</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_ContentControl_VerticalContentAlignment">VerticalContentAlignment</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_ContentControl">ContentControl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Visual_VisualChildren">VisualChildren</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Visual_VisualRoot">VisualRoot</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td></tr>
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
<td><a href="M_Avalonia_AvaloniaObject_CoerceValue">CoerceValue(AvaloniaProperty)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
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
<td><a href="M_Avalonia_Controls_TopLevel_GetAutoSafeAreaPadding">GetAutoSafeAreaPadding(Control)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_GetBaseValue__1">GetBaseValue(T)(StyledProperty(T))</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_GetHashCode">GetHashCode()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_TopLevel_GetSystemBarColor">GetSystemBarColor(Control)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_TemplatedControl_GetTemplateFocusTarget">GetTemplateFocusTarget()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_TopLevel_GetTopLevel">GetTopLevel(Visual)</a></td>
<td> </td></tr>
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
<td><a href="M_Avalonia_Controls_TopLevel_InvalidateMirrorTransform">InvalidateMirrorTransform()</a></td>
<td><br />(Overrides <a href="M_Avalonia_Visual_InvalidateMirrorTransform">Visual.InvalidateMirrorTransform()</a>)</td></tr>
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
<td><a href="M_Avalonia_Layout_Layoutable_MeasureOverride">MeasureOverride(Size)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_TopLevel_OnApplyTemplate">OnApplyTemplate(TemplateAppliedEventArgs)</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_Primitives_TemplatedControl_OnApplyTemplate">TemplatedControl.OnApplyTemplate(TemplateAppliedEventArgs)</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_TemplatedControl_OnAttachedToLogicalTree">OnAttachedToLogicalTree(LogicalTreeAttachmentEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_TopLevel_OnAttachedToVisualTree">OnAttachedToVisualTree(VisualTreeAttachmentEventArgs)</a></td>
<td><br />(Overrides <a href="M_Avalonia_Visual_OnAttachedToVisualTree">Visual.OnAttachedToVisualTree(VisualTreeAttachmentEventArgs)</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnAttachedToVisualTreeCore">OnAttachedToVisualTreeCore(VisualTreeAttachmentEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_TopLevel_OnClosed">OnClosed(EventArgs)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnCreateAutomationPeer">OnCreateAutomationPeer()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td></tr>
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
<td><a href="M_Avalonia_Visual_OnDetachedFromVisualTree">OnDetachedFromVisualTree(VisualTreeAttachmentEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnDetachedFromVisualTreeCore">OnDetachedFromVisualTreeCore(VisualTreeAttachmentEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnGotFocus">OnGotFocus(GotFocusEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_StyledElement_OnInitialized">OnInitialized()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Input_InputElement_OnKeyDown">OnKeyDown(KeyEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnKeyUp">OnKeyUp(KeyEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnLoaded">OnLoaded(RoutedEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnLostFocus">OnLostFocus(RoutedEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Layout_Layoutable_OnMeasureInvalidated">OnMeasureInvalidated()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_TopLevel_OnOpened">OnOpened(EventArgs)</a></td>
<td> </td></tr>
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
<td><a href="M_Avalonia_Input_InputElement_OnPointerMoved">OnPointerMoved(PointerEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Input_InputElement_OnPointerPressed">OnPointerPressed(PointerPressedEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnPointerReleased">OnPointerReleased(PointerReleasedEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Input_InputElement_OnPointerWheelChanged">OnPointerWheelChanged(PointerWheelEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_TopLevel_OnPropertyChanged">OnPropertyChanged(AvaloniaPropertyChangedEventArgs)</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_ContentControl_OnPropertyChanged">ContentControl.OnPropertyChanged(AvaloniaPropertyChangedEventArgs)</a>)</td></tr>
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
<td><a href="M_Avalonia_Input_InputElement_OnTextInput">OnTextInput(TextInputEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Input_InputElement">InputElement</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnUnloaded">OnUnloaded(RoutedEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Layout_Layoutable_OnVisualParentChanged">OnVisualParentChanged(Visual, Visual)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Layout_Layoutable">Layoutable</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Interactivity_Interactive_RaiseEvent">RaiseEvent(RoutedEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Interactivity_Interactive">Interactive</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_RaisePropertyChanged__1">RaisePropertyChanged(T)(DirectPropertyBase(T), T, T)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_ContentControl_RegisterContentPresenter">RegisterContentPresenter(ContentPresenter)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_ContentControl">ContentControl</a>)</td></tr>
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
<td><a href="M_Avalonia_Controls_TopLevel_RequestAnimationFrame">RequestAnimationFrame(Action(TimeSpan))</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Controls_TopLevel_RequestPlatformInhibition">RequestPlatformInhibition(PlatformInhibitionType, String)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_SetAndRaise__1">SetAndRaise(T)(DirectPropertyBase(T), T, T)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_TopLevel_SetAutoSafeAreaPadding">SetAutoSafeAreaPadding(Control, Boolean)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_SetCurrentValue">SetCurrentValue(AvaloniaProperty, Object)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_SetCurrentValue__1">SetCurrentValue(T)(StyledProperty(T), T)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_TopLevel_SetSystemBarColor">SetSystemBarColor(Control, SolidColorBrush)</a></td>
<td> </td></tr>
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
<td><a href="M_Avalonia_Controls_TopLevel_StartRendering">StartRendering()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Controls_TopLevel_StopRendering">StopRendering()</a></td>
<td> </td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_TopLevel_TryGetPlatformHandle">TryGetPlatformHandle()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_StyledElement_TryGetResource">TryGetResource(Object, ThemeVariant, Object)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_UpdateDataValidation">UpdateDataValidation(AvaloniaProperty, BindingValueType, Exception)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
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
<td><a href="E_Avalonia_Controls_TopLevel_BackRequested">BackRequested</a></td>
<td> </td></tr>
<tr>
<td><a href="E_Avalonia_Controls_TopLevel_Closed">Closed</a></td>
<td> </td></tr>
<tr>
<td><a href="E_Avalonia_Controls_Control_ContextRequested">ContextRequested</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td></tr>
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
<td><a href="E_Avalonia_Controls_TopLevel_Opened">Opened</a></td>
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
<td><a href="E_Avalonia_Controls_TopLevel_ScalingChanged">ScalingChanged</a></td>
<td> </td></tr>
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
<td><a href="F_Avalonia_Controls_TopLevel_ActualThemeVariantProperty">ActualThemeVariantProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TopLevel_ActualTransparencyLevelProperty">ActualTransparencyLevelProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TopLevel_AutoSafeAreaPaddingProperty">AutoSafeAreaPaddingProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TopLevel_BackRequestedEvent">BackRequestedEvent</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TopLevel_ClientSizeProperty">ClientSizeProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TopLevel_FrameSizeProperty">FrameSizeProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TopLevel_PointerOverElementProperty">PointerOverElementProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TopLevel_RequestedThemeVariantProperty">RequestedThemeVariantProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TopLevel_SystemBarColorProperty">SystemBarColorProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TopLevel_TransparencyBackgroundFallbackProperty">TransparencyBackgroundFallbackProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Controls_TopLevel_TransparencyLevelHintProperty">TransparencyLevelHintProperty</a></td>
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
<td><a href="M_Avalonia_Controls_NameScopeExtensions_Find__1_1">Find(T)(String)</a></td>
<td><br />(Defined by <a href="T_Avalonia_Controls_NameScopeExtensions">NameScopeExtensions</a>)</td></tr>
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
<td><a href="M_Avalonia_LogicalTree_LogicalExtensions_FindLogicalAncestorOfType__1">FindLogicalAncestorOfType(T)(Boolean)</a></td>
<td><br />(Defined by <a href="T_Avalonia_LogicalTree_LogicalExtensions">LogicalExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_LogicalTree_LogicalExtensions_FindLogicalDescendantOfType__1">FindLogicalDescendantOfType(T)(Boolean)</a></td>
<td><br />(Defined by <a href="T_Avalonia_LogicalTree_LogicalExtensions">LogicalExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_NameScopeExtensions_FindNameScope">FindNameScope()</a></td>
<td><br />(Defined by <a href="T_Avalonia_Controls_NameScopeExtensions">NameScopeExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_NameScopeExtensions_Get__1_1">Get(T)(String)</a></td>
<td><br />(Defined by <a href="T_Avalonia_Controls_NameScopeExtensions">NameScopeExtensions</a>)</td></tr>
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
<td><a href="M_Avalonia_Input_InputExtensions_GetInputElementsAt_1">GetInputElementsAt(Point)</a></td>
<td><br />(Defined by <a href="T_Avalonia_Input_InputExtensions">InputExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Input_InputExtensions_GetInputElementsAt">GetInputElementsAt(Point, Boolean)</a></td>
<td><br />(Defined by <a href="T_Avalonia_Input_InputExtensions">InputExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Interactivity_InteractiveExtensions_GetInteractiveParent">GetInteractiveParent()</a></td>
<td><br />(Defined by <a href="T_Avalonia_Interactivity_InteractiveExtensions">InteractiveExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_LogicalTree_LogicalExtensions_GetLogicalAncestors">GetLogicalAncestors()</a></td>
<td><br />(Defined by <a href="T_Avalonia_LogicalTree_LogicalExtensions">LogicalExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_LogicalTree_LogicalExtensions_GetLogicalChildren">GetLogicalChildren()</a></td>
<td><br />(Defined by <a href="T_Avalonia_LogicalTree_LogicalExtensions">LogicalExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_LogicalTree_LogicalExtensions_GetLogicalDescendants">GetLogicalDescendants()</a></td>
<td><br />(Defined by <a href="T_Avalonia_LogicalTree_LogicalExtensions">LogicalExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_LogicalTree_LogicalExtensions_GetLogicalParent">GetLogicalParent()</a></td>
<td><br />(Defined by <a href="T_Avalonia_LogicalTree_LogicalExtensions">LogicalExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_LogicalTree_LogicalExtensions_GetLogicalParent__1">GetLogicalParent(T)()</a></td>
<td><br />(Defined by <a href="T_Avalonia_LogicalTree_LogicalExtensions">LogicalExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_LogicalTree_LogicalExtensions_GetLogicalSiblings">GetLogicalSiblings()</a></td>
<td><br />(Defined by <a href="T_Avalonia_LogicalTree_LogicalExtensions">LogicalExtensions</a>)</td></tr>
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
<td><a href="M_Avalonia_LogicalTree_LogicalExtensions_GetSelfAndLogicalAncestors">GetSelfAndLogicalAncestors()</a></td>
<td><br />(Defined by <a href="T_Avalonia_LogicalTree_LogicalExtensions">LogicalExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_LogicalTree_LogicalExtensions_GetSelfAndLogicalDescendants">GetSelfAndLogicalDescendants()</a></td>
<td><br />(Defined by <a href="T_Avalonia_LogicalTree_LogicalExtensions">LogicalExtensions</a>)</td></tr>
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
<td><a href="M_Avalonia_Input_InputExtensions_InputHitTest_3">InputHitTest(Point)</a></td>
<td><br />(Defined by <a href="T_Avalonia_Input_InputExtensions">InputExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Input_InputExtensions_InputHitTest">InputHitTest(Point, Boolean)</a></td>
<td><br />(Defined by <a href="T_Avalonia_Input_InputExtensions">InputExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Input_InputExtensions_InputHitTest_2">InputHitTest(Point, Func(Visual, Boolean))</a></td>
<td><br />(Defined by <a href="T_Avalonia_Input_InputExtensions">InputExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Input_InputExtensions_InputHitTest_1">InputHitTest(Point, Func(Visual, Boolean), Boolean)</a></td>
<td><br />(Defined by <a href="T_Avalonia_Input_InputExtensions">InputExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_VisualTree_VisualExtensions_IsAttachedToVisualTree">IsAttachedToVisualTree()</a></td>
<td><br />(Defined by <a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_LogicalTree_LogicalExtensions_IsLogicalAncestorOf">IsLogicalAncestorOf(ILogical)</a></td>
<td><br />(Defined by <a href="T_Avalonia_LogicalTree_LogicalExtensions">LogicalExtensions</a>)</td></tr>
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
