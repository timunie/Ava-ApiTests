---
title:IResourceHost Interface
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# IResourceHost Interface




## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
[NotClientImplementableAttribute]
public interface IResourceHost : IResourceNode
```
**VB**
``` VB
<NotClientImplementableAttribute>
Public Interface IResourceHost
	Inherits IResourceNode
```
**F#**
``` F#
[<NotClientImplementableAttribute>]
type IResourceHost = 
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
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_IResourceHost_NotifyHostedResourcesChanged">NotifyHostedResourcesChanged(ResourcesChangedEventArgs)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Controls_IResourceNode_TryGetResource">TryGetResource(Object, ThemeVariant, Object)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_IResourceNode">IResourceNode</a>)</td></tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Controls_IResourceHost_ResourcesChanged">ResourcesChanged</a></td>
<td> </td></tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_ResourceNodeExtensions_FindResource_1">FindResource(Object)</a></td>
<td><br />(Defined by <a href="T_Avalonia_Controls_ResourceNodeExtensions">ResourceNodeExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_ResourceNodeExtensions_FindResource">FindResource(ThemeVariant, Object)</a></td>
<td><br />(Defined by <a href="T_Avalonia_Controls_ResourceNodeExtensions">ResourceNodeExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_ResourceNodeExtensions_GetResourceObservable">GetResourceObservable(Object, Func(Object, Object))</a></td>
<td><br />(Defined by <a href="T_Avalonia_Controls_ResourceNodeExtensions">ResourceNodeExtensions</a>)</td></tr>
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
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
