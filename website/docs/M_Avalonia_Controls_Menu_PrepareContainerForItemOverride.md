import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# PrepareContainerForItemOverride Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected override void PrepareContainerForItemOverride(
	Control element,
	Object? item,
	int index
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overrides Sub PrepareContainerForItemOverride ( 
	element As Control,
	item As Object,
	index As Integer
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract PrepareContainerForItemOverride : 
        element : Control * 
        item : Object * 
        index : int -> unit 
override PrepareContainerForItemOverride : 
        element : Control * 
        item : Object * 
        index : int -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Menu.cs#L99" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Menu">Menu Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
