import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# AfterSetupCallback Property


Gets a method to call after the <a href="T_Avalonia_Application">Application</a> is setup.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Action<AppBuilder> AfterSetupCallback { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public ReadOnly Property AfterSetupCallback As Action(Of AppBuilder)
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member AfterSetupCallback : Action<AppBuilder> with get
```
</TabItem>
</Tabs>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.action-1" target="_blank" rel="noopener noreferrer">Action</a>(<a href="T_Avalonia_AppBuilder">AppBuilder</a>)

## See Also


#### Reference
<a href="T_Avalonia_AppBuilder">AppBuilder Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
