# NotifyResourcesChanged Method


Notifies the control that a change has been made to resources that apply to it.



## Definition
**Namespace:** <a href="N_Avalonia_LogicalTree">Avalonia.LogicalTree</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
void NotifyResourcesChanged(
	ResourcesChangedEventArgs e
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Sub NotifyResourcesChanged ( 
	e As ResourcesChangedEventArgs
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract NotifyResourcesChanged : 
        e : ResourcesChangedEventArgs -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/LogicalTree/ILogical.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_ResourcesChangedEventArgs">ResourcesChangedEventArgs</a></dt><dd>The event args.</dd></dl>This method will be called automatically by the framework, you should not need to call this method yourself.

## See Also


#### Reference
<a href="T_Avalonia_LogicalTree_ILogical">ILogical Interface</a>  
<a href="N_Avalonia_LogicalTree">Avalonia.LogicalTree Namespace</a>  

