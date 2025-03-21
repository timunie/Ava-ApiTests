# ContainerIndexChangedOverride Method


Called when the index for a container changes due to an insertion or removal in the items collection.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected override void ContainerIndexChangedOverride(
	Control container,
	int oldIndex,
	int newIndex
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overrides Sub ContainerIndexChangedOverride ( 
	container As Control,
	oldIndex As Integer,
	newIndex As Integer
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ContainerIndexChangedOverride : 
        container : Control * 
        oldIndex : int * 
        newIndex : int -> unit 
override ContainerIndexChangedOverride : 
        container : Control * 
        oldIndex : int * 
        newIndex : int -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Primitives/SelectingItemsControl.cs#L538" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd>The container whose index changed.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The old index.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The new index.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_SelectingItemsControl">SelectingItemsControl Class</a>  
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  

