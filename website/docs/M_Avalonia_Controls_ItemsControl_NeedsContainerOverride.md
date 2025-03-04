import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# NeedsContainerOverride Method


Determines whether the specified item can be its own container.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual bool NeedsContainerOverride(
	Object? item,
	int index,
	out Object?? recycleKey
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Function NeedsContainerOverride ( 
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



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/ItemsControl.cs#L504" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The item to check.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The index of the item.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>When the method returns, contains a key that can be used to locate a previously recycled container of the correct type, or null if the item cannot be recycled. If the item is its own container then by definition it cannot be recycled, so <em>recycleKey</em> shoud be set to null.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
true if the item needs a container; otherwise false if the item can itself be used as a container.

## See Also


#### Reference
<a href="T_Avalonia_Controls_ItemsControl">ItemsControl Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
