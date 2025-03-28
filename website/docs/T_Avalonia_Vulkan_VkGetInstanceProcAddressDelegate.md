# VkGetInstanceProcAddressDelegate Delegate




## Definition
**Namespace:** <a href="N_Avalonia_Vulkan">Avalonia.Vulkan</a>  
**Assembly:** Avalonia.Vulkan (in Avalonia.Vulkan.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public delegate IntPtr VkGetInstanceProcAddressDelegate(
	IntPtr instance,
	string name
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Delegate Function VkGetInstanceProcAddressDelegate ( 
	instance As IntPtr,
	name As String
) As IntPtr
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type VkGetInstanceProcAddressDelegate = 
    delegate of 
        instance : IntPtr * 
        name : string -> IntPtr
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.intptr" target="_blank" rel="noopener noreferrer">IntPtr</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.intptr" target="_blank" rel="noopener noreferrer">IntPtr</a>

## See Also


#### Reference
<a href="N_Avalonia_Vulkan">Avalonia.Vulkan Namespace</a>  

