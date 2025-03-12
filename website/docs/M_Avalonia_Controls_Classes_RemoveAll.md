# RemoveAll Method


Removes style classes from the collection.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public override void RemoveAll(
	IEnumerable<string> names
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Overrides Sub RemoveAll ( 
	names As IEnumerable(Of String)
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract RemoveAll : 
        names : IEnumerable<string> -> unit 
override RemoveAll : 
        names : IEnumerable<string> -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Controls/Classes.cs#L205" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>)</dt><dd>The class name.</dd></dl>

#### Implements
<a href="M_Avalonia_Collections_IAvaloniaList_1_RemoveAll">IAvaloniaList(T).RemoveAll(IEnumerable(T))</a>  
Only standard classes may be removed via this method. To remove pseudoclasses (classes beginning with a ':' character) use the protected <a href="P_Avalonia_StyledElement_PseudoClasses">PseudoClasses</a> property.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Classes">Classes Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

