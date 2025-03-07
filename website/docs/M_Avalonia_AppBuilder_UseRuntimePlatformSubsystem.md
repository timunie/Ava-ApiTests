# UseRuntimePlatformSubsystem Method


Specifies a runtime platform subsystem to use.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public AppBuilder UseRuntimePlatformSubsystem(
	Action initializer,
	string name = ""
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function UseRuntimePlatformSubsystem ( 
	initializer As Action,
	Optional name As String = ""
) As AppBuilder
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member UseRuntimePlatformSubsystem : 
        initializer : Action * 
        ?name : string 
(* Defaults:
        let _name = defaultArg name ""
*)
-> AppBuilder 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/AppBuilder.cs#L243" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a></dt><dd>The method to call to initialize the runtime platform subsystem.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>  (Optional)</dt><dd>The name of the runtime platform subsystem.</dd></dl>

#### Return Value
<a href="T_Avalonia_AppBuilder">AppBuilder</a>  
An <a href="T_Avalonia_AppBuilder">AppBuilder</a> instance.

## See Also


#### Reference
<a href="T_Avalonia_AppBuilder">AppBuilder Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
