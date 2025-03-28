# NotifyHostedResourcesChanged Method


Notifies the resource host that one or more of its hosted resources has changed.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
void NotifyHostedResourcesChanged(
	ResourcesChangedEventArgs e
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Sub NotifyHostedResourcesChanged ( 
	e As ResourcesChangedEventArgs
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract NotifyHostedResourcesChanged : 
        e : ResourcesChangedEventArgs -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Controls/IResourceHost.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_ResourcesChangedEventArgs">ResourcesChangedEventArgs</a></dt><dd>The event args.</dd></dl>

## Remarks
This method will be called automatically by the framework, you should not need to call this method yourself. It is called when the resources hosted by this element have changed, and is usually called by a resource dictionary or style hosted by the element in response to a resource being added or removed.

## See Also


#### Reference
<a href="T_Avalonia_Controls_IResourceHost">IResourceHost Interface</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

