import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# UpdateTimer Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls_Platform">Avalonia.Controls.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void UpdateTimer(
	long? dueTimeInMs
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub UpdateTimer ( 
	dueTimeInMs As Long?
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract UpdateTimer : 
        dueTimeInMs : Nullable<int64> -> unit 
override UpdateTimer : 
        dueTimeInMs : Nullable<int64> -> unit 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.int64" target="_blank" rel="noopener noreferrer">Int64</a>)</dt><dd> </dd></dl>

#### Implements
IDispatcherImpl.UpdateTimer(Nullable(Int64))  


## See Also


#### Reference
<a href="T_Avalonia_Controls_Platform_ManagedDispatcherImpl">ManagedDispatcherImpl Class</a>  
<a href="N_Avalonia_Controls_Platform">Avalonia.Controls.Platform Namespace</a>  
