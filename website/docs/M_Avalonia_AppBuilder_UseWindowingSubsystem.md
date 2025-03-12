# UseWindowingSubsystem Method


Specifies a windowing subsystem to use.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public AppBuilder UseWindowingSubsystem(
	Action initializer,
	string name = ""
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function UseWindowingSubsystem ( 
	initializer As Action,
	Optional name As String = ""
) As AppBuilder
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member UseWindowingSubsystem : 
        initializer : Action * 
        ?name : string 
(* Defaults:
        let _name = defaultArg name ""
*)
-> AppBuilder 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/AppBuilder.cs#L218" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a></dt><dd>The method to call to initialize the windowing subsystem.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>  (Optional)</dt><dd>The name of the windowing subsystem.</dd></dl>

#### Return Value
<a href="T_Avalonia_AppBuilder">AppBuilder</a>  
An <a href="T_Avalonia_AppBuilder">AppBuilder</a> instance.

## See Also


#### Reference
<a href="T_Avalonia_AppBuilder">AppBuilder Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

