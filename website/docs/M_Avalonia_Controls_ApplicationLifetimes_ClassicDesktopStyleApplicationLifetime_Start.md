import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Start Method


Since the lifetime must be set up/prepared with 'args' before executing Start(), an overload with no parameters seems more suitable for integrating with some lifetime manager providers, such as MS HostApplicationBuilder.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public int Start()
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function Start As Integer
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Start : unit -> int 
```
</TabItem>
</Tabs>



#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>  
exit code

## See Also


#### Reference
<a href="T_Avalonia_Controls_ApplicationLifetimes_ClassicDesktopStyleApplicationLifetime">ClassicDesktopStyleApplicationLifetime Class</a>  
<a href="Overload_Avalonia_Controls_ApplicationLifetimes_ClassicDesktopStyleApplicationLifetime_Start">Start Overload</a>  
<a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes Namespace</a>  
