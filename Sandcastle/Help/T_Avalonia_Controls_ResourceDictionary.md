---
title:ResourceDictionary Class
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# ResourceDictionary Class




## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public class ResourceDictionary : ResourceProvider, 
	IResourceDictionary, IResourceProvider, IResourceNode, IDictionary<Object, Object>, 
	ICollection<KeyValuePair<Object, Object>>, IEnumerable<KeyValuePair<Object, Object>>, 
	IEnumerable, IThemeVariantProvider
```
**VB**
``` VB
Public Class ResourceDictionary
	Inherits ResourceProvider
	Implements IResourceDictionary, IResourceProvider, IResourceNode, IDictionary(Of Object, Object), 
	ICollection(Of KeyValuePair(Of Object, Object)), IEnumerable(Of KeyValuePair(Of Object, Object)), 
	IEnumerable, IThemeVariantProvider
```
**F#**
``` F#
type ResourceDictionary = 
    class
        inherit ResourceProvider
        interface IResourceDictionary
        interface IResourceProvider
        interface IResourceNode
        interface IDictionary<Object, Object>
        interface ICollection<KeyValuePair<Object, Object>>
        interface IEnumerable<KeyValuePair<Object, Object>>
        interface IEnumerable
        interface IThemeVariantProvider
    end
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>  →  <a href="T_Avalonia_Controls_ResourceProvider">ResourceProvider</a>  →  ResourceDictionary</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_Dialogs_Internal_ResourceSelectorConverter">Avalonia.Dialogs.Internal.ResourceSelectorConverter</a></td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Controls_IResourceDictionary">IResourceDictionary</a>, <a href="T_Avalonia_Controls_IResourceNode">IResourceNode</a>, <a href="T_Avalonia_Controls_IResourceProvider">IResourceProvider</a>, <a href="T_Avalonia_Controls_IThemeVariantProvider">IThemeVariantProvider</a>, <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection</a>(<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2" target="_blank" rel="noopener noreferrer">KeyValuePair</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>, <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)), <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2" target="_blank" rel="noopener noreferrer">IDictionary</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>, <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>), <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2" target="_blank" rel="noopener noreferrer">KeyValuePair</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>, <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)), <a href="https://learn.microsoft.com/dotnet/api/system.collections.ienumerable" target="_blank" rel="noopener noreferrer">IEnumerable</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_ResourceDictionary__ctor">ResourceDictionary()</a></td>
<td>Initializes a new instance of the ResourceDictionary class</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_ResourceDictionary__ctor_1">ResourceDictionary(IResourceHost)</a></td>
<td>Initializes a new instance of the ResourceDictionary class</td></tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_ResourceDictionary_Count">Count</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Controls_ResourceDictionary_HasResources">HasResources</a></td>
<td><br />(Overrides <a href="P_Avalonia_Controls_ResourceProvider_HasResources">ResourceProvider.HasResources</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_AvaloniaObject_InheritanceParent">InheritanceParent</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_AvaloniaObject_Item">Item(AvaloniaProperty)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_AvaloniaObject_Item_1">Item(IndexerDescriptor)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_ResourceDictionary_Item">Item(Object)</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Controls_ResourceDictionary_Keys">Keys</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Controls_ResourceDictionary_MergedDictionaries">MergedDictionaries</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Controls_ResourceProvider_Owner">Owner</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_ResourceProvider">ResourceProvider</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_ResourceDictionary_ThemeDictionaries">ThemeDictionaries</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Controls_ResourceDictionary_Values">Values</a></td>
<td> </td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_ResourceDictionary_Add">Add(Object, Object)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Controls_ResourceDictionary_AddDeferred">AddDeferred(Object, IDeferredContent)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Controls_ResourceDictionary_AddDeferred_1">AddDeferred(Object, Func(IServiceProvider, Object))</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Controls_ResourceDictionary_AddNotSharedDeferred">AddNotSharedDeferred(Object, IDeferredContent)</a></td>
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
<td><a href="M_Avalonia_Controls_ResourceDictionary_Clear">Clear()</a></td>
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
<td><a href="M_Avalonia_AvaloniaObject_CoerceValue">CoerceValue(AvaloniaProperty)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_ResourceDictionary_ContainsKey">ContainsKey(Object)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Controls_ResourceDictionary_EnsureCapacity">EnsureCapacity(Int32)</a></td>
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
<td><a href="M_Avalonia_Controls_ResourceDictionary_GetEnumerator">GetEnumerator()</a></td>
<td> </td></tr>
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
<td><a href="M_Avalonia_AvaloniaObject_IsAnimating">IsAnimating(AvaloniaProperty)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_IsSet">IsSet(AvaloniaProperty)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_ResourceDictionary_OnAddOwner">OnAddOwner(IResourceHost)</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_ResourceProvider_OnAddOwner">ResourceProvider.OnAddOwner(IResourceHost)</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_OnPropertyChanged">OnPropertyChanged(AvaloniaPropertyChangedEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_OnPropertyChangedCore">OnPropertyChangedCore(AvaloniaPropertyChangedEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_ResourceDictionary_OnRemoveOwner">OnRemoveOwner(IResourceHost)</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_ResourceProvider_OnRemoveOwner">ResourceProvider.OnRemoveOwner(IResourceHost)</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_RaisePropertyChanged__1">RaisePropertyChanged(T)(DirectPropertyBase(T), T, T)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_ResourceProvider_RaiseResourcesChanged">RaiseResourcesChanged()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_ResourceProvider">ResourceProvider</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_ResourceDictionary_Remove">Remove(Object)</a></td>
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
<td><a href="M_Avalonia_Controls_ResourceDictionary_TryGetResource">TryGetResource(Object, ThemeVariant, Object)</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_ResourceProvider_TryGetResource">ResourceProvider.TryGetResource(Object, ThemeVariant, Object)</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_ResourceDictionary_TryGetValue">TryGetValue(Object, Object)</a></td>
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
<td><a href="E_Avalonia_Controls_ResourceProvider_OwnerChanged">OwnerChanged</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_ResourceProvider">ResourceProvider</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_AvaloniaObject_PropertyChanged">PropertyChanged</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td></tr>
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
<td><a href="M_Avalonia_Controls_ResourceNodeExtensions_GetResourceObservable_2">GetResourceObservable(Object, Func(Object, Object))</a></td>
<td><br />(Defined by <a href="T_Avalonia_Controls_ResourceNodeExtensions">ResourceNodeExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_ResourceNodeExtensions_GetResourceObservable_1">GetResourceObservable(Object, ThemeVariant, Func(Object, Object))</a></td>
<td><br />(Defined by <a href="T_Avalonia_Controls_ResourceNodeExtensions">ResourceNodeExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetValue__1">GetValue(T)(AvaloniaProperty(T))</a></td>
<td><br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Diagnostics_AvaloniaObjectExtensions_GetValueStoreDiagnostic">GetValueStoreDiagnostic()</a></td>
<td><br />(Defined by <a href="T_Avalonia_Diagnostics_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
