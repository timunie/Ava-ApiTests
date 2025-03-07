# Layoutable Class


Implements layout-related functionality for a control.



## Definition
**Namespace:** <a href="N_Avalonia_Layout">Avalonia.Layout</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class Layoutable : Visual
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class Layoutable
	Inherits Visual
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type Layoutable = 
    class
        inherit Visual
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Layout/Layoutable.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>  →  <a href="T_Avalonia_Animation_Animatable">Animatable</a>  →  <a href="T_Avalonia_StyledElement">StyledElement</a>  →  <a href="T_Avalonia_Visual">Visual</a>  →  Layoutable</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_Interactivity_Interactive">Avalonia.Interactivity.Interactive</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Layout_Layoutable__ctor">Layoutable()</a></td>
<td>Initializes a new instance of the Layoutable class</td>
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
<td><a href="P_Avalonia_StyledElement_DataContext">DataContext</a></td>
<td>Gets or sets the control's data context.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Layout_Layoutable_DesiredSize">DesiredSize</a></td>
<td>Gets the size that this element computed during the measure pass of the layout process.</td>
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
<td><a href="P_Avalonia_Visual_HasMirrorTransform">HasMirrorTransform</a></td>
<td>Gets or sets a value indicating whether to apply mirror transform on this control.<br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Layout_Layoutable_Height">Height</a></td>
<td>Gets or sets the height of the element.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Layout_Layoutable_HorizontalAlignment">HorizontalAlignment</a></td>
<td>Gets or sets the element's preferred horizontal alignment in its parent.</td>
</tr>
<tr>
<td><a href="P_Avalonia_AvaloniaObject_InheritanceParent">InheritanceParent</a></td>
<td>Gets or sets the parent object that inherited <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> values are inherited from.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Layout_Layoutable_IsArrangeValid">IsArrangeValid</a></td>
<td>Gets a value indicating whether the control's layouts arrange is valid.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Visual_IsEffectivelyVisible">IsEffectivelyVisible</a></td>
<td>Gets a value indicating whether this control and all its parents are visible.<br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_StyledElement_IsInitialized">IsInitialized</a></td>
<td>Gets a value that indicates whether the element has finished initialization.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Layout_Layoutable_IsMeasureValid">IsMeasureValid</a></td>
<td>Gets a value indicating whether the control's layout measure is valid.</td>
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
<td><a href="P_Avalonia_StyledElement_LogicalChildren">LogicalChildren</a></td>
<td>Gets the styled element's logical children.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Layout_Layoutable_Margin">Margin</a></td>
<td>Gets or sets the margin around the element.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Layout_Layoutable_MaxHeight">MaxHeight</a></td>
<td>Gets or sets the maximum height of the element.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Layout_Layoutable_MaxWidth">MaxWidth</a></td>
<td>Gets or sets the maximum width of the element.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Layout_Layoutable_MinHeight">MinHeight</a></td>
<td>Gets or sets the minimum height of the element.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Layout_Layoutable_MinWidth">MinWidth</a></td>
<td>Gets or sets the minimum width of the element.</td>
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
<td>Gets or sets a value that determines whether the element should be snapped to pixel boundaries at layout time.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Layout_Layoutable_VerticalAlignment">VerticalAlignment</a></td>
<td>Gets or sets the element's preferred vertical alignment in its parent.</td>
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
<td>Gets or sets the width of the element.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Visual_ZIndex">ZIndex</a></td>
<td>Gets or sets the Z index of the control.<br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Layout_Layoutable_AffectsArrange__1">AffectsArrange(T)(AvaloniaProperty[])</a></td>
<td>Marks a property as affecting the control's arrangement.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_Layoutable_AffectsMeasure__1">AffectsMeasure(T)(AvaloniaProperty[])</a></td>
<td>Marks a property as affecting the control's measurement.</td>
</tr>
<tr>
<td><a href="M_Avalonia_StyledElement_ApplyStyling">ApplyStyling()</a></td>
<td>Applies styling to the control if the control is initialized and styling is not already applied.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_Layoutable_ApplyTemplate">ApplyTemplate()</a></td>
<td>Creates the visual children of the control, if necessary</td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_Layoutable_Arrange">Arrange(Rect)</a></td>
<td>Arranges the control and its children.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_Layoutable_ArrangeCore">ArrangeCore(Rect)</a></td>
<td>The default implementation of the control's arrange pass.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_Layoutable_ArrangeOverride">ArrangeOverride(Size)</a></td>
<td>Positions child elements as part of a layout pass.</td>
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
<td><a href="M_Avalonia_StyledElement_InitializeIfNeeded">InitializeIfNeeded()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_Layoutable_InvalidateArrange">InvalidateArrange()</a></td>
<td>Invalidates the arrangement of the control and queues a new layout pass.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_Layoutable_InvalidateMeasure">InvalidateMeasure()</a></td>
<td>Invalidates the measurement of the control and queues a new layout pass.</td>
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
<td>Carries out a measure of the control.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_Layoutable_MeasureCore">MeasureCore(Size)</a></td>
<td>The default implementation of the control's measure pass.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_Layoutable_MeasureOverride">MeasureOverride(Size)</a></td>
<td>Measures the control and its child elements as part of a layout pass.</td>
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
<td><a href="M_Avalonia_Visual_OnAttachedToVisualTree">OnAttachedToVisualTree(VisualTreeAttachmentEventArgs)</a></td>
<td>Called when the control is added to a rooted visual tree.<br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_Layoutable_OnAttachedToVisualTreeCore">OnAttachedToVisualTreeCore(VisualTreeAttachmentEventArgs)</a></td>
<td>Calls the <a href="M_Avalonia_Visual_OnAttachedToVisualTree">OnAttachedToVisualTree(VisualTreeAttachmentEventArgs)</a> method for this control and all of its visual descendants.<br />(Overrides <a href="M_Avalonia_Visual_OnAttachedToVisualTreeCore">Visual.OnAttachedToVisualTreeCore(VisualTreeAttachmentEventArgs)</a>)</td>
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
<td><a href="M_Avalonia_Visual_OnDetachedFromVisualTree">OnDetachedFromVisualTree(VisualTreeAttachmentEventArgs)</a></td>
<td>Called when the control is removed from a rooted visual tree.<br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_Layoutable_OnDetachedFromVisualTreeCore">OnDetachedFromVisualTreeCore(VisualTreeAttachmentEventArgs)</a></td>
<td><br />(Overrides <a href="M_Avalonia_Visual_OnDetachedFromVisualTreeCore">Visual.OnDetachedFromVisualTreeCore(VisualTreeAttachmentEventArgs)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_StyledElement_OnInitialized">OnInitialized()</a></td>
<td>Called when the control finishes initialization.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_Layoutable_OnMeasureInvalidated">OnMeasureInvalidated()</a></td>
<td>Called by InvalidateMeasure</td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_Layoutable_OnPropertyChanged">OnPropertyChanged(AvaloniaPropertyChangedEventArgs)</a></td>
<td><br />(Overrides <a href="M_Avalonia_Visual_OnPropertyChanged">Visual.OnPropertyChanged(AvaloniaPropertyChangedEventArgs)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Animation_Animatable_OnPropertyChangedCore">OnPropertyChangedCore(AvaloniaPropertyChangedEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Animation_Animatable">Animatable</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_Layoutable_OnVisualParentChanged">OnVisualParentChanged(Visual, Visual)</a></td>
<td>Called when the control's visual parent changes.<br />(Overrides <a href="M_Avalonia_Visual_OnVisualParentChanged">Visual.OnVisualParentChanged(Visual, Visual)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_RaisePropertyChanged__1">RaisePropertyChanged(T)(DirectPropertyBase(T), T, T)</a></td>
<td>Raises the <a href="E_Avalonia_AvaloniaObject_PropertyChanged">PropertyChanged</a> event for a direct property.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Visual_Render">Render(DrawingContext)</a></td>
<td>Renders the visual to a <a href="T_Avalonia_Media_DrawingContext">DrawingContext</a>.<br />(Inherited from <a href="T_Avalonia_Visual">Visual</a>)</td>
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
<td><a href="M_Avalonia_Layout_Layoutable_UpdateLayout">UpdateLayout()</a></td>
<td>Executes a layout pass.</td>
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
<td><a href="E_Avalonia_Layout_Layoutable_EffectiveViewportChanged">EffectiveViewportChanged</a></td>
<td>Occurs when the element's effective viewport changes.</td>
</tr>
<tr>
<td><a href="E_Avalonia_StyledElement_Initialized">Initialized</a></td>
<td>Occurs when the styled element has finished initialization.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Layout_Layoutable_LayoutUpdated">LayoutUpdated</a></td>
<td>Occurs when a layout pass completes for the control.</td>
</tr>
<tr>
<td><a href="E_Avalonia_AvaloniaObject_PropertyChanged">PropertyChanged</a></td>
<td>Raised when a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> value changes on this object.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_StyledElement_ResourcesChanged">ResourcesChanged</a></td>
<td>Occurs when a resource in this styled element or a parent styled element has changed.<br />(Inherited from <a href="T_Avalonia_StyledElement">StyledElement</a>)</td>
</tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Avalonia_Layout_Layoutable_DesiredSizeProperty">DesiredSizeProperty</a></td>
<td>Defines the <a href="P_Avalonia_Layout_Layoutable_DesiredSize">DesiredSize</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Layout_Layoutable_HeightProperty">HeightProperty</a></td>
<td>Defines the <a href="P_Avalonia_Layout_Layoutable_Height">Height</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Layout_Layoutable_HorizontalAlignmentProperty">HorizontalAlignmentProperty</a></td>
<td>Defines the <a href="P_Avalonia_Layout_Layoutable_HorizontalAlignment">HorizontalAlignment</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Layout_Layoutable_MarginProperty">MarginProperty</a></td>
<td>Defines the <a href="P_Avalonia_Layout_Layoutable_Margin">Margin</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Layout_Layoutable_MaxHeightProperty">MaxHeightProperty</a></td>
<td>Defines the <a href="P_Avalonia_Layout_Layoutable_MaxHeight">MaxHeight</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Layout_Layoutable_MaxWidthProperty">MaxWidthProperty</a></td>
<td>Defines the <a href="P_Avalonia_Layout_Layoutable_MaxWidth">MaxWidth</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Layout_Layoutable_MinHeightProperty">MinHeightProperty</a></td>
<td>Defines the <a href="P_Avalonia_Layout_Layoutable_MinHeight">MinHeight</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Layout_Layoutable_MinWidthProperty">MinWidthProperty</a></td>
<td>Defines the <a href="P_Avalonia_Layout_Layoutable_MinWidth">MinWidth</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Layout_Layoutable_UseLayoutRoundingProperty">UseLayoutRoundingProperty</a></td>
<td>Defines the <a href="P_Avalonia_Layout_Layoutable_UseLayoutRounding">UseLayoutRounding</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Layout_Layoutable_VerticalAlignmentProperty">VerticalAlignmentProperty</a></td>
<td>Defines the <a href="P_Avalonia_Layout_Layoutable_VerticalAlignment">VerticalAlignment</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Layout_Layoutable_WidthProperty">WidthProperty</a></td>
<td>Defines the <a href="P_Avalonia_Layout_Layoutable_Width">Width</a> property.</td>
</tr>
</table>

## Extension Methods
<table>
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
<td><a href="M_Avalonia_Diagnostics_AvaloniaObjectExtensions_GetDiagnostic">GetDiagnostic(AvaloniaProperty)</a></td>
<td>Gets a diagnostic for a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> on a <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>.<br />(Defined by <a href="T_Avalonia_Diagnostics_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
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
<a href="N_Avalonia_Layout">Avalonia.Layout Namespace</a>  
