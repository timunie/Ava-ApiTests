# IResourceHost Interface


Represents an element which hosts resources.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IResourceHost : IResourceNode
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IResourceHost
	Inherits IResourceNode
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IResourceHost = 
    interface
        interface IResourceNode
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Controls/IResourceHost.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Controls_IResourceNode">IResourceNode</a></td></tr>
</table>

This interface is implemented by <a href="T_Avalonia_StyledElement">StyledElement</a> and `Application`.

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_IResourceNode_HasResources">HasResources</a></td>
<td>Gets a value indicating whether the object has resources.<br />(Inherited from <a href="T_Avalonia_Controls_IResourceNode">IResourceNode</a>)</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_IResourceHost_NotifyHostedResourcesChanged">NotifyHostedResourcesChanged(ResourcesChangedEventArgs)</a></td>
<td>Notifies the resource host that one or more of its hosted resources has changed.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_IResourceNode_TryGetResource">TryGetResource(Object, ThemeVariant, Object)</a></td>
<td>Tries to find a resource within the object.<br />(Inherited from <a href="T_Avalonia_Controls_IResourceNode">IResourceNode</a>)</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Controls_IResourceHost_ResourcesChanged">ResourcesChanged</a></td>
<td>Raised when the resources change on the element or an ancestor of the element.</td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_ResourceNodeExtensions_FindResource_1">FindResource(Object)</a></td>
<td>Finds the specified resource by searching up the logical tree and then global styles.<br />(Defined by <a href="T_Avalonia_Controls_ResourceNodeExtensions">ResourceNodeExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ResourceNodeExtensions_FindResource">FindResource(ThemeVariant, Object)</a></td>
<td>Finds the specified resource by searching up the logical tree and then global styles.<br />(Defined by <a href="T_Avalonia_Controls_ResourceNodeExtensions">ResourceNodeExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ResourceNodeExtensions_GetResourceObservable">GetResourceObservable(Object, Func(Object, Object))</a></td>
<td><br />(Defined by <a href="T_Avalonia_Controls_ResourceNodeExtensions">ResourceNodeExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ResourceNodeExtensions_TryFindResource_1">TryFindResource(Object, Object)</a></td>
<td>Tries to the specified resource by searching up the logical tree and then global styles.<br />(Defined by <a href="T_Avalonia_Controls_ResourceNodeExtensions">ResourceNodeExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ResourceNodeExtensions_TryFindResource">TryFindResource(Object, ThemeVariant, Object)</a></td>
<td>Tries to the specified resource by searching up the logical tree and then global styles.<br />(Defined by <a href="T_Avalonia_Controls_ResourceNodeExtensions">ResourceNodeExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ResourceNodeExtensions_TryGetResource">TryGetResource(Object, Object)</a></td>
<td>Tries to find a resource within the object.<br />(Defined by <a href="T_Avalonia_Controls_ResourceNodeExtensions">ResourceNodeExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
