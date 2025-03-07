# AddRange Method


Adds a style classes to the collection.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public override void AddRange(
	IEnumerable<string> names
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Overrides Sub AddRange ( 
	names As IEnumerable(Of String)
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract AddRange : 
        names : IEnumerable<string> -> unit 
override AddRange : 
        names : IEnumerable<string> -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Controls/Classes.cs#L85" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>)</dt><dd>The class names.</dd></dl>

#### Implements
<a href="M_Avalonia_Collections_IAvaloniaList_1_AddRange">IAvaloniaList(T).AddRange(IEnumerable(T))</a>  
Only standard classes may be added via this method. To add pseudoclasses (classes beginning with a ':' character) use the protected <a href="P_Avalonia_StyledElement_PseudoClasses">PseudoClasses</a> property.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Classes">Classes Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
