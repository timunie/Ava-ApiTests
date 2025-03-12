# Set Method


Adds a or removes a style class to/from the collection.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void Set(
	string name,
	bool value
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub Set ( 
	name As String,
	value As Boolean
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Set : 
        name : string * 
        value : bool -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Controls/Classes.cs#L344" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The class names.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd>If true adds the class, if false, removes it.</dd></dl>Only standard classes may be added or removed via this method. To add pseudoclasses (classes beginning with a ':' character) use the protected <a href="P_Avalonia_StyledElement_PseudoClasses">PseudoClasses</a> property.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Classes">Classes Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

