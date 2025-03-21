# OnAddOwner Method


Handles when owner was added. Base method implementation raises <a href="M_Avalonia_Controls_IResourceHost_NotifyHostedResourcesChanged">NotifyHostedResourcesChanged(ResourcesChangedEventArgs)</a>, if this provider has any resources.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual void OnAddOwner(
	IResourceHost owner
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Sub OnAddOwner ( 
	owner As IResourceHost
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnAddOwner : 
        owner : IResourceHost -> unit 
override OnAddOwner : 
        owner : IResourceHost -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Controls/ResourceProvider.cs#L58" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_IResourceHost">IResourceHost</a></dt><dd>New owner.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_ResourceProvider">ResourceProvider Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

