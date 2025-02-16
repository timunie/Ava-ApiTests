---
title:VkGetInstanceProcAddressDelegate Delegate
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# VkGetInstanceProcAddressDelegate Delegate




## Definition
**Namespace:** <a href="N_Avalonia_Vulkan">Avalonia.Vulkan</a>  
**Assembly:** Avalonia.Vulkan (in Avalonia.Vulkan.dll) Version: 11.2.4

**C#**
``` C#
public delegate IntPtr VkGetInstanceProcAddressDelegate(
	IntPtr instance,
	string name
)
```
**VB**
``` VB
Public Delegate Function VkGetInstanceProcAddressDelegate ( 
	instance As IntPtr,
	name As String
) As IntPtr
```
**F#**
``` F#
type VkGetInstanceProcAddressDelegate = 
    delegate of 
        instance : IntPtr * 
        name : string -> IntPtr
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.intptr" target="_blank" rel="noopener noreferrer">IntPtr</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.intptr" target="_blank" rel="noopener noreferrer">IntPtr</a>

## See Also


#### Reference
<a href="N_Avalonia_Vulkan">Avalonia.Vulkan Namespace</a>  
