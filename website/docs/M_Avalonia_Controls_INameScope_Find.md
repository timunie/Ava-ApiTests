# Find Method


Finds a named element in the name scope, returns immediately, doesn't traverse the name scope stack



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
Object? Find(
	string name
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function Find ( 
	name As String
) As Object
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Find : 
        name : string -> Object 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Controls/INameScope.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The name.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  
The element, or null if the name was not found.

## See Also


#### Reference
<a href="T_Avalonia_Controls_INameScope">INameScope Interface</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

