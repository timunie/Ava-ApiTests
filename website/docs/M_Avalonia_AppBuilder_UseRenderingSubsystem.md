import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# UseRenderingSubsystem Method


Specifies a rendering subsystem to use.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public AppBuilder UseRenderingSubsystem(
	Action initializer,
	string name = ""
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function UseRenderingSubsystem ( 
	initializer As Action,
	Optional name As String = ""
) As AppBuilder
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member UseRenderingSubsystem : 
        initializer : Action * 
        ?name : string 
(* Defaults:
        let _name = defaultArg name ""
*)
-> AppBuilder 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a></dt><dd>The method to call to initialize the rendering subsystem.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>  (Optional)</dt><dd>The name of the rendering subsystem.</dd></dl>

#### Return Value
<a href="T_Avalonia_AppBuilder">AppBuilder</a>  
An <a href="T_Avalonia_AppBuilder">AppBuilder</a> instance.

## See Also


#### Reference
<a href="T_Avalonia_AppBuilder">AppBuilder Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
