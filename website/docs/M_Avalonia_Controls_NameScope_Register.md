# Register Method


Registers an element in the name scope.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void Register(
	string name,
	Object element
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub Register ( 
	name As String,
	element As Object
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Register : 
        name : string * 
        element : Object -> unit 
override Register : 
        name : string * 
        element : Object -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Controls/NameScope.cs#L54" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The element name.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The element.</dd></dl>

#### Implements
<a href="M_Avalonia_Controls_INameScope_Register">INameScope.Register(String, Object)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Controls_NameScope">NameScope Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
