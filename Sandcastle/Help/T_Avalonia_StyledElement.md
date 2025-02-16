---
title:StyledElement Class
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# StyledElement Class




## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public class StyledElement : Animatable, 
	IDataContextProvider, ILogical, IThemeVariantHost, IResourceHost, IResourceNode, 
	IStyleHost, ISetLogicalParent, ISetInheritanceParent, ISupportInitialize, INamed, 
	IStyleable
```
**VB**
``` VB
Public Class StyledElement
	Inherits Animatable
	Implements IDataContextProvider, ILogical, IThemeVariantHost, IResourceHost, 
	IResourceNode, IStyleHost, ISetLogicalParent, ISetInheritanceParent, ISupportInitialize, 
	INamed, IStyleable
```
**F#**
``` F#
type StyledElement = 
    class
        inherit Animatable
        interface IDataContextProvider
        interface ILogical
        interface IThemeVariantHost
        interface IResourceHost
        interface IResourceNode
        interface IStyleHost
        interface ISetLogicalParent
        interface ISetInheritanceParent
        interface ISupportInitialize
        interface INamed
        interface IStyleable
    end
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>  →  <a href="T_Avalonia_Animation_Animatable">Animatable</a>  →  StyledElement</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_Controls_Documents_TextElement">Avalonia.Controls.Documents.TextElement</a><br /><a href="T_Avalonia_Input_GestureRecognizers_GestureRecognizer">Avalonia.Input.GestureRecognizers.GestureRecognizer</a><br /><a href="T_Avalonia_Visual">Avalonia.Visual</a></td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Controls_IResourceHost">IResourceHost</a>, <a href="T_Avalonia_Controls_IResourceNode">IResourceNode</a>, <a href="T_Avalonia_Controls_ISetInheritanceParent">ISetInheritanceParent</a>, <a href="T_Avalonia_Controls_ISetLogicalParent">ISetLogicalParent</a>, <a href="T_Avalonia_IDataContextProvider">IDataContextProvider</a>, <a href="T_Avalonia_INamed">INamed</a>, <a href="T_Avalonia_LogicalTree_ILogical">ILogical</a>, <a href="T_Avalonia_Styling_IStyleable">IStyleable</a>, <a href="T_Avalonia_Styling_IStyleHost">IStyleHost</a>, <a href="T_Avalonia_Styling_IThemeVariantHost">IThemeVariantHost</a>, <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.isupportinitialize" target="_blank" rel="noopener noreferrer">ISupportInitialize</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_StyledElement__ctor">StyledElement()</a></td>
<td>Initializes a new instance of the StyledElement class</td></tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_StyledElement_ActualThemeVariant">ActualThemeVariant</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_StyledElement_Classes">Classes</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_StyledElement_DataContext">DataContext</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_AvaloniaObject_InheritanceParent">InheritanceParent</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_StyledElement_IsInitialized">IsInitialized</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_AvaloniaObject_Item">Item(AvaloniaProperty)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_AvaloniaObject_Item_1">Item(IndexerDescriptor)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_StyledElement_LogicalChildren">LogicalChildren</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_StyledElement_Name">Name</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_StyledElement_Parent">Parent</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_StyledElement_PseudoClasses">PseudoClasses</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_StyledElement_Resources">Resources</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_StyledElement_StyleKey">StyleKey</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_StyledElement_StyleKeyOverride">StyleKeyOverride</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_StyledElement_Styles">Styles</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_StyledElement_TemplatedParent">TemplatedParent</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_StyledElement_Theme">Theme</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Animation_Animatable_Transitions">Transitions</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Animation_Animatable">Animatable</a>)</td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_StyledElement_ApplyStyling">ApplyStyling()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_StyledElement_BeginInit">BeginInit()</a></td>
<td> </td></tr>
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
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Equals">Equals(Object)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_GetBaseValue__1">GetBaseValue(T)(StyledProperty(T))</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_GetHashCode">GetHashCode()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
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
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_IsAnimating">IsAnimating(AvaloniaProperty)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_IsSet">IsSet(AvaloniaProperty)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_StyledElement_LogicalChildrenCollectionChanged">LogicalChildrenCollectionChanged(Object, NotifyCollectionChangedEventArgs)</a></td>
<td> </td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_StyledElement_OnAttachedToLogicalTree">OnAttachedToLogicalTree(LogicalTreeAttachmentEventArgs)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_StyledElement_OnDataContextBeginUpdate">OnDataContextBeginUpdate()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_StyledElement_OnDataContextChanged">OnDataContextChanged(EventArgs)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_StyledElement_OnDataContextEndUpdate">OnDataContextEndUpdate()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_StyledElement_OnDetachedFromLogicalTree">OnDetachedFromLogicalTree(LogicalTreeAttachmentEventArgs)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_StyledElement_OnInitialized">OnInitialized()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_StyledElement_OnPropertyChanged">OnPropertyChanged(AvaloniaPropertyChangedEventArgs)</a></td>
<td><br />(Overrides <a href="M_Avalonia_AvaloniaObject_OnPropertyChanged">AvaloniaObject.OnPropertyChanged(AvaloniaPropertyChangedEventArgs)</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Animation_Animatable_OnPropertyChangedCore">OnPropertyChangedCore(AvaloniaPropertyChangedEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Animation_Animatable">Animatable</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_RaisePropertyChanged__1">RaisePropertyChanged(T)(DirectPropertyBase(T), T, T)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
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
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_UpdateDataValidation">UpdateDataValidation(AvaloniaProperty, BindingValueType, Exception)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_VerifyAccess">VerifyAccess()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_StyledElement_ActualThemeVariantChanged">ActualThemeVariantChanged</a></td>
<td> </td></tr>
<tr>
<td><a href="E_Avalonia_StyledElement_AttachedToLogicalTree">AttachedToLogicalTree</a></td>
<td> </td></tr>
<tr>
<td><a href="E_Avalonia_StyledElement_DataContextChanged">DataContextChanged</a></td>
<td> </td></tr>
<tr>
<td><a href="E_Avalonia_StyledElement_DetachedFromLogicalTree">DetachedFromLogicalTree</a></td>
<td> </td></tr>
<tr>
<td><a href="E_Avalonia_StyledElement_Initialized">Initialized</a></td>
<td> </td></tr>
<tr>
<td><a href="E_Avalonia_AvaloniaObject_PropertyChanged">PropertyChanged</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_StyledElement_ResourcesChanged">ResourcesChanged</a></td>
<td> </td></tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Avalonia_StyledElement_DataContextProperty">DataContextProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_StyledElement_NameProperty">NameProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_StyledElement_ParentProperty">ParentProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_StyledElement_TemplatedParentProperty">TemplatedParentProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_StyledElement_ThemeProperty">ThemeProperty</a></td>
<td> </td></tr>
</table>

## Extension Methods
<table>
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
<td><a href="M_Avalonia_Controls_NameScopeExtensions_Find__1_1">Find(T)(String)</a></td>
<td><br />(Defined by <a href="T_Avalonia_Controls_NameScopeExtensions">NameScopeExtensions</a>)</td></tr>
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
<td><a href="M_Avalonia_Controls_ResourceNodeExtensions_FindResource_1">FindResource(Object)</a></td>
<td><br />(Defined by <a href="T_Avalonia_Controls_ResourceNodeExtensions">ResourceNodeExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_ResourceNodeExtensions_FindResource">FindResource(ThemeVariant, Object)</a></td>
<td><br />(Defined by <a href="T_Avalonia_Controls_ResourceNodeExtensions">ResourceNodeExtensions</a>)</td></tr>
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
<td><a href="M_Avalonia_Diagnostics_AvaloniaObjectExtensions_GetDiagnostic">GetDiagnostic(AvaloniaProperty)</a></td>
<td><br />(Defined by <a href="T_Avalonia_Diagnostics_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td></tr>
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
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetObservable__2">GetObservable(TSource, TResult)(AvaloniaProperty(TSource), Func(TSource, TResult))</a></td>
<td><br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetPropertyChangedObservable">GetPropertyChangedObservable(AvaloniaProperty)</a></td>
<td><br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_ResourceNodeExtensions_GetResourceObservable">GetResourceObservable(Object, Func(Object, Object))</a></td>
<td><br />(Defined by <a href="T_Avalonia_Controls_ResourceNodeExtensions">ResourceNodeExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_LogicalTree_LogicalExtensions_GetSelfAndLogicalAncestors">GetSelfAndLogicalAncestors()</a></td>
<td><br />(Defined by <a href="T_Avalonia_LogicalTree_LogicalExtensions">LogicalExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_LogicalTree_LogicalExtensions_GetSelfAndLogicalDescendants">GetSelfAndLogicalDescendants()</a></td>
<td><br />(Defined by <a href="T_Avalonia_LogicalTree_LogicalExtensions">LogicalExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Diagnostics_StyledElementExtensions_GetStyleDiagnostics">GetStyleDiagnostics()</a></td>
<td><br />(Defined by <a href="T_Avalonia_Diagnostics_StyledElementExtensions">StyledElementExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetValue__1">GetValue(T)(AvaloniaProperty(T))</a></td>
<td><br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Diagnostics_AvaloniaObjectExtensions_GetValueStoreDiagnostic">GetValueStoreDiagnostic()</a></td>
<td><br />(Defined by <a href="T_Avalonia_Diagnostics_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_LogicalTree_LogicalExtensions_IsLogicalAncestorOf">IsLogicalAncestorOf(ILogical)</a></td>
<td><br />(Defined by <a href="T_Avalonia_LogicalTree_LogicalExtensions">LogicalExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_ResourceNodeExtensions_TryFindResource_1">TryFindResource(Object, Object)</a></td>
<td><br />(Defined by <a href="T_Avalonia_Controls_ResourceNodeExtensions">ResourceNodeExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_ResourceNodeExtensions_TryFindResource">TryFindResource(Object, ThemeVariant, Object)</a></td>
<td><br />(Defined by <a href="T_Avalonia_Controls_ResourceNodeExtensions">ResourceNodeExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_ResourceNodeExtensions_TryGetResource">TryGetResource(Object, Object)</a></td>
<td><br />(Defined by <a href="T_Avalonia_Controls_ResourceNodeExtensions">ResourceNodeExtensions</a>)</td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia">Avalonia Namespace</a>  
