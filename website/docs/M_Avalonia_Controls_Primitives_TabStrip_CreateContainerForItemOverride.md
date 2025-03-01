import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# CreateContainerForItemOverride Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected override Control CreateContainerForItemOverride(
	Object? item,
	int index,
	Object? recycleKey
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overrides Function CreateContainerForItemOverride ( 
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



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Controls_Control">Control</a>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_TabStrip">TabStrip Class</a>  
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  
