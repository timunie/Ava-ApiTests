# IResourceProvider Interface


Represents an object that can be queried for resources but does not appear in the logical tree.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IResourceProvider : IResourceNode
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IResourceProvider
	Inherits IResourceNode
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IResourceProvider = 
    interface
        interface IResourceNode
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Controls/IResourceProvider.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Controls_IResourceNode">IResourceNode</a></td></tr>
</table>

This interface is implemented by <a href="T_Avalonia_Controls_ResourceDictionary">ResourceDictionary</a>, <a href="T_Avalonia_Styling_Style">Style</a> and <a href="T_Avalonia_Styling_Styles">Styles</a>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_IResourceNode_HasResources">HasResources</a></td>
<td>Gets a value indicating whether the object has resources.<br />(Inherited from <a href="T_Avalonia_Controls_IResourceNode">IResourceNode</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_IResourceProvider_Owner">Owner</a></td>
<td>Gets the owner of the resource provider.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_IResourceProvider_AddOwner">AddOwner(IResourceHost)</a></td>
<td>Adds an owner to the resource provider.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_IResourceProvider_RemoveOwner">RemoveOwner(IResourceHost)</a></td>
<td>Removes a resource provider owner.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_IResourceNode_TryGetResource">TryGetResource(Object, ThemeVariant, Object)</a></td>
<td>Tries to find a resource within the object.<br />(Inherited from <a href="T_Avalonia_Controls_IResourceNode">IResourceNode</a>)</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Controls_IResourceProvider_OwnerChanged">OwnerChanged</a></td>
<td>Raised when the <a href="P_Avalonia_Controls_IResourceProvider_Owner">Owner</a> of the resource provider changes.</td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_ResourceNodeExtensions_GetResourceObservable_2">GetResourceObservable(Object, Func(Object, Object))</a></td>
<td><br />(Defined by <a href="T_Avalonia_Controls_ResourceNodeExtensions">ResourceNodeExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ResourceNodeExtensions_GetResourceObservable_1">GetResourceObservable(Object, ThemeVariant, Func(Object, Object))</a></td>
<td><br />(Defined by <a href="T_Avalonia_Controls_ResourceNodeExtensions">ResourceNodeExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
