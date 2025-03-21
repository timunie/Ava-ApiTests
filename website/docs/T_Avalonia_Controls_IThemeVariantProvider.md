# IThemeVariantProvider Interface


Resource provider with theme variant awareness. Can be used with <a href="P_Avalonia_Controls_IResourceDictionary_ThemeDictionaries">ThemeDictionaries</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IThemeVariantProvider : IResourceProvider, 
	IResourceNode
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IThemeVariantProvider
	Inherits IResourceProvider, IResourceNode
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IThemeVariantProvider = 
    interface
        interface IResourceProvider
        interface IResourceNode
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Controls/IThemeVariantProvider.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Controls_IResourceNode">IResourceNode</a>, <a href="T_Avalonia_Controls_IResourceProvider">IResourceProvider</a></td></tr>
</table>



## Remarks
This is a helper interface for the XAML compiler to make Key property accessibly by the markup extensions. Which means, it can only be used with ResourceDictionaries and markup extensions in the XAML code.

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_IResourceNode_HasResources">HasResources</a></td>
<td>Gets a value indicating whether the object has resources.<br />(Inherited from <a href="T_Avalonia_Controls_IResourceNode">IResourceNode</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_IThemeVariantProvider_Key">Key</a></td>
<td>Key property set by the compiler.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_IResourceProvider_Owner">Owner</a></td>
<td>Gets the owner of the resource provider.<br />(Inherited from <a href="T_Avalonia_Controls_IResourceProvider">IResourceProvider</a>)</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_IResourceProvider_AddOwner">AddOwner(IResourceHost)</a></td>
<td>Adds an owner to the resource provider.<br />(Inherited from <a href="T_Avalonia_Controls_IResourceProvider">IResourceProvider</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_IResourceProvider_RemoveOwner">RemoveOwner(IResourceHost)</a></td>
<td>Removes a resource provider owner.<br />(Inherited from <a href="T_Avalonia_Controls_IResourceProvider">IResourceProvider</a>)</td>
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
<td>Raised when the <a href="P_Avalonia_Controls_IResourceProvider_Owner">Owner</a> of the resource provider changes.<br />(Inherited from <a href="T_Avalonia_Controls_IResourceProvider">IResourceProvider</a>)</td>
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

