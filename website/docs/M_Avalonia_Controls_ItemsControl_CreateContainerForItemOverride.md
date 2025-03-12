# CreateContainerForItemOverride Method


Creates or a container that can be used to display an item.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual Control CreateContainerForItemOverride(
	Object? item,
	int index,
	Object? recycleKey
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Function CreateContainerForItemOverride ( 
	item As Object,
	index As Integer,
	recycleKey As Object
) As Control
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract CreateContainerForItemOverride : 
        item : Object * 
        index : int * 
        recycleKey : Object -> Control 
override CreateContainerForItemOverride : 
        item : Object * 
        index : int * 
        recycleKey : Object -> Control 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/ItemsControl.cs#L355" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Controls_Control">Control</a>

## See Also


#### Reference
<a href="T_Avalonia_Controls_ItemsControl">ItemsControl Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

