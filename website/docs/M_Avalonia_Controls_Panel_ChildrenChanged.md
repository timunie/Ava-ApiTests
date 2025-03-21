# ChildrenChanged Method


Called when the <a href="P_Avalonia_Controls_Panel_Children">Children</a> collection changes.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual void ChildrenChanged(
	Object? sender,
	NotifyCollectionChangedEventArgs e
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Sub ChildrenChanged ( 
	sender As Object,
	e As NotifyCollectionChangedEventArgs
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ChildrenChanged : 
        sender : Object * 
        e : NotifyCollectionChangedEventArgs -> unit 
override ChildrenChanged : 
        sender : Object * 
        e : NotifyCollectionChangedEventArgs -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Panel.cs#L136" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The event sender.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.specialized.notifycollectionchangedeventargs" target="_blank" rel="noopener noreferrer">NotifyCollectionChangedEventArgs</a></dt><dd>The event args.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Panel">Panel Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

