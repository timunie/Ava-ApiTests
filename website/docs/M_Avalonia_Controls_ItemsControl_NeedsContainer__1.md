import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# NeedsContainer&lt;T&gt; Method


A default implementation of <a href="M_Avalonia_Controls_ItemsControl_NeedsContainerOverride">NeedsContainerOverride(Object, Int32, Object)</a> that returns true and sets the recycle key to <a href="P_Avalonia_Controls_ItemsControl_DefaultRecycleKey">DefaultRecycleKey</a> if the item is not a *T* .



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected bool NeedsContainer<T>(
	Object? item,
	out Object?? recycleKey
)
where T : Control

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Function NeedsContainer(Of T As Control) ( 
	item As Object,
	<OutAttribute> ByRef recycleKey As Object
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member NeedsContainer : 
        item : Object * 
        recycleKey : Object byref -> bool  when 'T : Control
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The item.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>When the method returns, contains <a href="P_Avalonia_Controls_ItemsControl_DefaultRecycleKey">DefaultRecycleKey</a> if <em>item</em> is not of type <em>T</em>; otherwise null.</dd></dl>

#### Type Parameters
<dl><dt /><dd>The container type.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
true if *item* is of type *T*; otherwise false.

## See Also


#### Reference
<a href="T_Avalonia_Controls_ItemsControl">ItemsControl Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
