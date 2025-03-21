# InsertRange Method


Inserts style classes into the collection.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public override void InsertRange(
	int index,
	IEnumerable<string> names
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Overrides Sub InsertRange ( 
	index As Integer,
	names As IEnumerable(Of String)
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract InsertRange : 
        index : int * 
        names : IEnumerable<string> -> unit 
override InsertRange : 
        index : int * 
        names : IEnumerable<string> -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Controls/Classes.cs#L151" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The index to insert the class at.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>)</dt><dd>The class names.</dd></dl>

#### Implements
<a href="M_Avalonia_Collections_IAvaloniaList_1_InsertRange">IAvaloniaList(T).InsertRange(Int32, IEnumerable(T))</a>  


## Remarks
Only standard classes may be added via this method. To add pseudoclasses (classes beginning with a ':' character) use the protected <a href="P_Avalonia_StyledElement_PseudoClasses">PseudoClasses</a> property.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Classes">Classes Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

