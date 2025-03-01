import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# NeedsContainerOverride Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected override bool NeedsContainerOverride(
	Object? item,
	int index,
	out Object?? recycleKey
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overrides Function NeedsContainerOverride ( 
	item As Object,
	index As Integer,
	<OutAttribute> ByRef recycleKey As Object
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract NeedsContainerOverride : 
        item : Object * 
        index : int * 
        recycleKey : Object byref -> bool 
override NeedsContainerOverride : 
        item : Object * 
        index : int * 
        recycleKey : Object byref -> bool 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## See Also


#### Reference
<a href="T_Avalonia_Controls_ListBox">ListBox Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
