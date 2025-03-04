import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# AppBuilder.AppMainDelegate Delegate




## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public delegate void AppMainDelegate(
	Application app,
	string[] args
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Delegate Sub AppMainDelegate ( 
	app As Application,
	args As String()
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type AppMainDelegate = 
    delegate of 
        app : Application * 
        args : string[] -> unit
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/AppBuilder.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Application">Application</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>[]</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="N_Avalonia">Avalonia Namespace</a>  
