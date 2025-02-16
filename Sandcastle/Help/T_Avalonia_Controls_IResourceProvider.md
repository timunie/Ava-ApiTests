---
title:IResourceProvider Interface
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# IResourceProvider Interface




## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public interface IResourceProvider : IResourceNode
```
**VB**
``` VB
Public Interface IResourceProvider
	Inherits IResourceNode
```
**F#**
``` F#
type IResourceProvider = 
    interface
        interface IResourceNode
    end
```

<table><tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Controls_IResourceNode">IResourceNode</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_IResourceNode_HasResources">HasResources</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_IResourceNode">IResourceNode</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Controls_IResourceProvider_Owner">Owner</a></td>
<td> </td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_IResourceProvider_AddOwner">AddOwner(IResourceHost)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Controls_IResourceProvider_RemoveOwner">RemoveOwner(IResourceHost)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Controls_IResourceNode_TryGetResource">TryGetResource(Object, ThemeVariant, Object)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_IResourceNode">IResourceNode</a>)</td></tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Controls_IResourceProvider_OwnerChanged">OwnerChanged</a></td>
<td> </td></tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_ResourceNodeExtensions_GetResourceObservable_2">GetResourceObservable(Object, Func(Object, Object))</a></td>
<td><br />(Defined by <a href="T_Avalonia_Controls_ResourceNodeExtensions">ResourceNodeExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_ResourceNodeExtensions_GetResourceObservable_1">GetResourceObservable(Object, ThemeVariant, Func(Object, Object))</a></td>
<td><br />(Defined by <a href="T_Avalonia_Controls_ResourceNodeExtensions">ResourceNodeExtensions</a>)</td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
